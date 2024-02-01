import mongoose, { mongo } from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const ProductModel = mongoose.model("products", ProductSchema);

export default ProductModel;
