import mongoose from "mongoose";

const connectDatabase = async (): Promise<void> => {
  const MONGO_URL: string = process.env.MONGO_URL!;

  if (!MONGO_URL) {
    throw new Error('The MONGO_URL environment variable is not set.');
  }

  try {
    await mongoose.connect(MONGO_URL);
    console.log('Successfully connected to MongoDB.');
  } catch (error: any) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
}

export default connectDatabase;