import { connect, disconnect } from 'mongoose';

async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    throw new Error('Error connecting to database');
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    throw new Error('Error disconnecting from database');
  }
}

export { disconnectFromDatabase, connectToDatabase };