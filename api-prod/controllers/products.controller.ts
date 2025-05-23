import { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import Product from "../models/Products.model";

export const getAllProducts = async (
  req: Request<ParamsDictionary>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      msg: "Products retrieved successfully",
      products: products,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req: Request<ParamsDictionary>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({
        msg: `Product not found`,
      });
      return;
    }
    res.status(200).json({
      msg: "Products retrieved successfully",
      product: product,
    });
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (
  req: Request<ParamsDictionary>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    console.log(req.body);
    const { name, price, stock } = req.body;
    const product = await Product.create({ name, price, stock });
    res.status(201).json({
      msg: `Product ${name} created successfully`,
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      msg: `Product not created successfully`,
    });
  }
};

export const updateProduct = async (
  req: Request<ParamsDictionary>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).json({
        msg: `Product id is required`,
      });
      return;
    }
    const { name, price, stock } = req.body;
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({
        msg: `Product not found`,
      });
      return;
    }
    await product.update({ name, price, stock });
    res.status(200).json({
      msg: `Product ${name} updated successfully`,
      product: product,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request<ParamsDictionary>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).json({
        msg: `Product id is required`,
      });
      return;
    }
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({
        msg: `Product not found`,
      });
      return;
    }
    await product.destroy();
    res.status(200).json({
      msg: `Product deleted successfully`,
      product: product,
    });
  } catch (error) {
    next(error);
  }
};
