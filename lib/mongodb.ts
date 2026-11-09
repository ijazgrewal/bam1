import { MongoClient } from "mongodb";

const databaseName = process.env.MONGODB_DB || "bam-transport";

declare global {
  var mongoClientPromise: Promise<MongoClient> | undefined;
}

export async function getDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is required to use the database.");
  const clientPromise = global.mongoClientPromise ?? new MongoClient(uri).connect();
  global.mongoClientPromise = clientPromise;
  return (await clientPromise).db(databaseName);
}
