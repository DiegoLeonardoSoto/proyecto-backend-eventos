import mongoose from 'mongoose';
import { env } from './env.config.js';
export async function connectToMongoDB() {
  try {
    await mongoose.connect( env.MONGO_URL );
    console.log("You successfully connected to MongoDB!");
    return mongoose;
  } catch (err) {
    console.dir(err);
  }
}
// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await mongoose.connection.close();
}
