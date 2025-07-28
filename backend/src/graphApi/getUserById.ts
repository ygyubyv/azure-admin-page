import axios from "axios";
import { getAccessToken } from "./getAccessToken";
import { getFormatedExtension } from "../utils/getFormatedExtension";

interface User {
  id: string;
  displayName?: string;
  userPrincipalName: string;
  mail?: string;
  givenName?: string;
  surname?: string;
  role?: string;
}

export const getUserById = async (userId: string): Promise<User> => {
  const accessToken = await getAccessToken();

  const roleExtension = getFormatedExtension("AzureAdminPageRole");

  const url = `https://graph.microsoft.com/v1.0/users/${userId}?$select=id,displayName,userPrincipalName,mail,givenName,surname,${roleExtension}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = response.data;

    const user: User = {
      id: data.id,
      displayName: data.displayName,
      userPrincipalName: data.userPrincipalName,
      mail: data.mail,
      givenName: data.givenName,
      surname: data.surname,
      role: data[roleExtension] || "",
    };

    return user;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }

    throw error;
  }
};
