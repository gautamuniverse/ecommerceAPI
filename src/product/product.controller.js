import ProductRepository from "./product.repository.js";

export default class ProductController {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  //Function to handle the creation of a new product
  async createProduct(req, res, next) {
    try {
      const { name, quantity } = req.body;

      //Validations
      if (!name || !quantity)
        return res.status(404).send({ data: "Name or quantity is missing!" });

      const result = await this.productRepository.createProduct({
        name,
        quantity,
      });

      if (result.success)
        return res.status(201).send({ data: { product: result.data } });
      else {
        return res.status(404).send({ data: { msg: "Something went wrong!" } });
      }
    } catch (err) {
      next(err);
    }
  }

  //handle the route to fetch all the products
  async getAllProducts(req, res, next) {
    try {
      const result = await this.productRepository.getAllProducts();

      if (result.success)
        return res.status(200).send({ data: { products: result.data } });
      else {
        return res.status(400).send({
          data: { msg: "No products found, please add some products!" },
        });
      }
    } catch (err) {
      next(err);
    }
  }

  //handle the route to remove a product using their ID
  async removeProduct(req, res, next) {
    try {
      //get the id
      const id = req.params.id;
      if (!id)
        return res
          .status(404)
          .send({ data: { msg: "Please provide the prodoct's id" } });

      const result = await this.productRepository.removeProduct(id);

      if (result.success)
        return res
          .status(200)
          .send({ data: { message: "Product deleted successfully" } });
      else {
        return res.status(404).send({
          data: { message: result.data },
        });
      }
    } catch (err) {
      next(err);
    }
  }

  // Handle route to update the quantity of an existing product using their id
  async updateProduct(req, res, next) {
    try {
      //Get the id
      const id = req.params.id;
      //get the quantity
      const qtty = req.query.number;
      if (!id || !qtty)
        return res
          .status(400)
          .send({ data: { message: "Product Id or the quantity is missing" } });
      const result = await this.productRepository.updateProduct(id, {
        $inc: { quantity: qtty },
      });

      if (result.success)
        return res.status(200).send({
          data: { product: result.data, message: "Updated successfully!" },
        });
      else {
        return res.status(400).send({ data: { message: result.data } });
      }
    } catch (err) {
      next(err);
    }
  }
}
