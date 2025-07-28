import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { loginRequest, myMSALObj } from "@/azure/msalConfig";
import { parseRolesFromString } from "@/helpers/roleConverters";
import { showNotification } from "@/helpers/showNotification";

interface IdTokenClaims {
  aud: string;
  auth_time: number;
  exp: number;
  extension_AzureAdminPageRole: string;
  iat: number;
  iss: string;
  nbf: number;
  nonce: string;
  sub: string;
}

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);
  const isInitialized = ref(false);
  const userRolesString = ref("");
  const idToken = ref("");

  const userRolesArray = computed(() => {
    return parseRolesFromString(userRolesString.value);
  });

  const login = async () => {
    try {
      if (!myMSALObj) {
        throw new Error("MSAL is not initialized");
      }
      await myMSALObj.loginRedirect(loginRequest);
    } catch (error) {
      showNotification("error", "Login failed");
      console.error("Login error", error);
    }
  };

  const logout = async () => {
    try {
      if (!myMSALObj) {
        throw new Error("MSAL is not initialized");
      }
      isAuthenticated.value = false;
      isInitialized.value = false;
      await myMSALObj.logoutRedirect();
    } catch (error) {
      showNotification("error", "Logout failed");
      console.error("Logout error", error);
    }
  };

  const initAuth = async () => {
    if (isInitialized.value) {
      return;
    }

    isInitialized.value = true;

    try {
      await myMSALObj.handleRedirectPromise();
      const accounts = myMSALObj.getAllAccounts();
      if (accounts.length > 0) {
        myMSALObj.setActiveAccount(accounts[0]);
        isAuthenticated.value = true;
      } else {
        isAuthenticated.value = false;
      }
    } catch (error) {
      showNotification("error", "Authentication error, please try again");
      console.error("Auth init error", error);
      isAuthenticated.value = false;
    }
  };

  const setTokenData = async () => {
    if (userRolesString.value && idToken.value) {
      return;
    }

    const token = await getMsalToken();
    if (!token) {
      showNotification("error", "Failed to get token");
      return;
    }

    const idTokenClaims = token.idTokenClaims as IdTokenClaims;

    userRolesString.value = idTokenClaims.extension_AzureAdminPageRole;
    idToken.value = token.idToken;
  };

  const getMsalToken = async () => {
    try {
      const response = await myMSALObj.acquireTokenSilent(loginRequest);
      return response;
    } catch (error) {
      showNotification("error", "Token acquisition failed");
      console.error("Token error", error);
    }
  };

  return {
    isAuthenticated,
    isInitialized,
    userRolesString,
    userRolesArray,
    idToken,
    login,
    logout,
    initAuth,
    getMsalToken,
    setTokenData,
  };
});
