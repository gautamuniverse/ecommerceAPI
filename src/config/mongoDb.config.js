import mongoose from "mongoose";

const connectionURL = process.env.DB_URL;

const connectionUsingMongoose = async () => {
  try {
    await mongoose.connect(connectionURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to DB using Mongoose");
  } catch (err) {
    console.log("Db connection error: " + err);
  }
};


export default connectionUsingMongoose;