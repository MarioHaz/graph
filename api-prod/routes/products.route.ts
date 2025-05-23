import {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductById,
} from "./../controllers/products.controller";
import { Router } from "express";

const router = Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", createProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export { router as ProductsRouter };
