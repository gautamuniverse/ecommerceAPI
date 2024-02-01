import mongoose from "mongoose";
import ProductModel from "./product.schema.js";
import AppplicationError from "../errorHandler/errorHandler.js";
import { ObjectId } from "mongodb";

export default class ProductRepository {
  //Function to handle the creation of a product
  async createProduct(data) {
    try {
      const newProduct = new ProductModel(data);

      const savedProduct = await newProduct.save();

      return { success: true, data: savedProduct };
    } catch (err) {
      throw new AppplicationError(500, err);
    }
  }

  //Function to fetch all the products
  async getAllProducts() {
    try {
      const findProducts = await ProductModel.find({});
      if (findProducts.length > 0) return { success: true, data: findProducts };
      else {
        return { success: false, data: "No products found, add some!" };
      }
    } catch (err) {
      throw new AppplicationError(500, err);
    }
  }

  //Function to remove a product using their ID
  async removeProduct(id) {
    try {
      const deletedProduct = await ProductModel.deleteOne({
        _id: new ObjectId(id),
      });

      if (deletedProduct.deletedCount > 0)
        return { success: true, data: "Product deleted successfully" };
      else
        return {
          success: false,
          data: "Product not found or couldn't be deleted",
        };
    } catch (err) {
      throw new AppplicationError(500, err);
    }
  }

  // Function to update the quantity of an existing product using their id
  async updateProduct(id, data) {
    try {
      const updateDocument = await ProductModel.updateOne(
        { _id: new ObjectId(id) },
        data
      );

      if (updateDocument.modifiedCount > 0) {
        const findProduct = await ProductModel.findById(id);
        return { success: true, data: findProduct };
      } else {
        console.log(updateDocument);
        return { success: false, data: "Product couldn't be updated!" };
      }
    } catch (err) {
      throw new AppplicationError(500, err);
    }
  }
}
