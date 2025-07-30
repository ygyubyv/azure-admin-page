import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { addUserToDatabase } from "../mongodb/addUserToDatabase";
import { User } from "../types/User";

export const createUserHandler = async (
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> => {
  try {
    const body = (await request.json()) as User;

    const userData: User = {
      id: body.id,
      displayName: body.displayName ?? null,
      jobTitle: body.jobTitle ?? null,
      department: body.department ?? null,
      createdDateTime: body.createdDateTime ?? null,
      accountEnabled: body.accountEnabled ?? false,
      onPremisesSyncEnabled: body.onPremisesSyncEnabled ?? false,
      preferredLanguage: body.preferredLanguage ?? null,
      role: body.role,
    };

    await addUserToDatabase(userData);

    return {
      status: 200,
      jsonBody: {
        version: "1.0.0",
        status: 200,
        action: "Continue",
      },
    };
  } catch (err: any) {
    context.error("Error in createUserHandler", err);
    return {
      status: 500,
      jsonBody: {
        version: "1.0.0",
        status: 500,
        userMessage: "Something went wrong while saving user data.",
      },
    };
  }
};

app.http("createUser", {
  methods: ["POST"],
  handler: createUserHandler,
  route: "users",
  authLevel: "anonymous",
});
