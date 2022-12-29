
import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  mongoose.set('strictQuery', false);
  
  const db = await mongoose.connect(
    process.env.NODE_ENV === 'development' 
      ? 'mongodb://localhost/test'
      : process.env.MONGODB_URI, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;