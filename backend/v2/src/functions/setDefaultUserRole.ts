import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { getUserRoleById } from "../mongodb/getUserRoleById";
import { getFormatedExtension } from "../utils/getFormatedExtension";
import { checkBasicAuth } from "../auth/checkBasicAuth";

interface AssignRoleRequestBody {
  client_id?: string;
}

export const setDefaultUserRoleHandler = async (
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> => {
  if (!checkBasicAuth(request)) {
    context.error("Unauthorized");
    return {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
      jsonBody: { error: "Unauthorized" },
    };
  }

  try {
    const body = (await request.json()) as AssignRoleRequestBody;
    const clientId = body.client_id;

    if (!clientId) {
      return {
        status: 400,
        jsonBody: {
          version: "1.0.0",
          status: 400,
          message: "Missing client_id in query",
        },
      };
    }

    const role = await getUserRoleById(clientId);

    return {
      status: 200,
      jsonBody: {
        version: "1.0.0",
        action: "Continue",
        [getFormatedExtension("AzureAdminPageRole")]: role,
      },
    };
  } catch (err: any) {
    context.error("Error assigning role:", err);
    return {
      status: 500,
      jsonBody: {
        version: "1.0.0",
        action: "ValidationError",
        userMessage: "Could not assign role",
      },
    };
  }
};

app.http("setDefaultUserRole", {
  methods: ["POST"],
  handler: setDefaultUserRoleHandler,
});
