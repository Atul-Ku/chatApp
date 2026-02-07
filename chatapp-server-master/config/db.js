import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://atul07918:f46l828fRXNFaQsd@socio.n3qvx3g.mongodb.net/");
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;