import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { deleteUserById } from "../graphApi/deleteUserById";
import { getRolesFromToken } from "../auth/jwt/getRolesFromToken";
import { deleteUser } from "../services/userService";

export const deleteUserHandler = async (
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> => {
  const authHeader = request.headers.get("authorization") || "";
  const token = authHeader.replace("Bearer ", "");

  if (!token) {
    return {
      status: 401,
      jsonBody: { error: "No token provided" },
    };
  }

  const currentUserRoles = getRolesFromToken(token);
  const isOwner = currentUserRoles.includes("owner");
  const isAdmin = currentUserRoles.includes("admin");

  if (!isOwner && !isAdmin) {
    return {
      status: 403,
      jsonBody: { error: "Insufficient permissions" },
    };
  }

  const userId = request.params.id;

  if (!userId) {
    return {
      status: 400,
      jsonBody: { error: "Missing user ID in route" },
    };
  }

  try {
    await deleteUserById(userId);
    await deleteUser(userId);

    return {
      status: 204,
    };
  } catch (error) {
    context.error("Error deleting user:", error.message || error);
    return {
      status: 500,
      jsonBody: { error: "Failed to delete user" },
    };
  }
};

app.http("deleteUserById", {
  methods: ["DELETE"],
  handler: deleteUserHandler,
  authLevel: "anonymous",
  route: "users/{id}",
});
