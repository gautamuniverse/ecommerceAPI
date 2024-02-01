import express from "express";
import ProductController from "./product.controller.js";

const productRouter = express.Router();
const productController = new ProductController();

//Post route to create a new product
productRouter.post("/create", (req, res, next) =>
  productController.createProduct(req, res, next)
);

//Get route to fetch all the products
productRouter.get("/", (req, res, next) =>
  productController.getAllProducts(req, res, next)
);

//Delete route to remove a product using their ID
productRouter.delete("/:id", (req, res, next) =>
  productController.removeProduct(req, res, next)
);

//Post route to update the quantity of an existing product using their id
productRouter.post("/:id/update_quantity/", (req, res, next) =>
  productController.updateProduct(req, res, next)
);

export default productRouter;