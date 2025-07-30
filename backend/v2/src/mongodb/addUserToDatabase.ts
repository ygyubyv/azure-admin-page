import { getDb } from "./mongoClient";
import { User } from "../types/User";

export const addUserToDatabase = async (user: User) => {
  const db = await getDb();
  const collection = db.collection("users");
  const result = await collection.insertOne(user);
  return result;
};
