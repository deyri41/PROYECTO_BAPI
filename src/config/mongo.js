import mongoose from"mongoose";


const { DB_URI } = process.env;

 export const dbConnect = async () => {
  try {
    if (typeof DB_URI === "string") {
      await mongoose.connect(DB_URI);
      console.log("MongoDb connected is OK!");
    }
  } catch (error) {
    console.log("Error in conection for:", error)
  }
}


