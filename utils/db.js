import { MongoClient } from 'mongodb';

let client;
let clientPromise;

export async function connectToDb() {
  if (!process.env.MONGODB_URI) {
    throw new Error("Please add your MongoDB URI to .env");
  }

  if (client && clientPromise) {
    return clientPromise;
  }

  client = new MongoClient(process.env.MONGODB_URI);
  clientPromise = client.connect().then((connectedClient) => {
    return connectedClient.db();
  });

  return clientPromise;
}