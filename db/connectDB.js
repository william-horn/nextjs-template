
import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  mongoose.set('strictQuery', false);
  const DEV = process.env.NODE_ENV === 'development';

  console.log('environment mode: ', process.env.NODE_ENV);
  console.log('mongo running in dev mode: ', DEV);
  console.log('mongo uri: ', process.env.MONGODB_URI);
  
  const db = await mongoose.connect(
    (DEV
      ? 'mongodb://localhost/test'
      : process.env.MONGODB_URI), 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;