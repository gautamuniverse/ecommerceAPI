import "./env.config.js";
import express from "express";
import AppplicationError from "./src/errorHandler/errorHandler.js";
import connectionUsingMongoose from "./src/config/mongoDb.config.js";
import productRouter from "./src/product/product.routes.js";

const server = express();

//Parse the json data
server.use(express.json());

//API route
server.use("/products", productRouter);

//Application level error handler
server.use((err, req, res, next) => {
  //Developer defined errors using the throw keyword
  if (err instanceof AppplicationError) {
    res.status(err.code).send(err.message);
  }
  //All other application level errors, not handled by the developer
  else {
    console.log(err);
    res
      .status(500)
      .send("Something went wrong at server end, please try again later!");
  }
});

//Default route
server.get("/", (req, res) => {
    res.send("Welcome to E-com API");
  });

server.listen(3542, () => {
  console.log("Server is listening on " + 3542);
  connectionUsingMongoose();
});
