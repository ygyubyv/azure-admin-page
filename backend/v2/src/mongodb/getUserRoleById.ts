import { getDb } from "./mongoClient";

export const getUserRoleById = async (clientId: string) => {
  const db = await getDb();
  const collection = db.collection("users");

  const user = await collection.findOne({ id: clientId });

  if (!user) {
    throw new Error("User not found");
  }

  return user.role;
};
