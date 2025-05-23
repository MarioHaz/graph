import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ProductsRouter } from "./routes/products.route";
import { sequelize } from "./config/database";

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());

app.use("/products", ProductsRouter);

app.listen(process.env.PORT, async () => {
  console.log(`Listening on port ${process.env.PORT}`);
  try {
    await sequelize.sync({ force: false });
  } catch (error) {
    console.error(error);
  }
});
