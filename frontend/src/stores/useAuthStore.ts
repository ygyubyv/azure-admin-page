import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { loginRequest, myMSALObj } from "@/azure/msalConfig";
import { parseRolesFromString } from "@/helpers/roleConverters";

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
        throw new Error("MSAL не ініціалізовано");
      }
      await myMSALObj.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Помилка входу", error);
    }
  };

  const logout = async () => {
    try {
      if (!myMSALObj) {
        throw new Error("MSAL не ініціалізовано");
      }
      isAuthenticated.value = false;
      isInitialized.value = false;
      await myMSALObj.logoutRedirect();
    } catch (error) {
      console.error("Помилка виходу", error);
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
      console.error("Помилка авторизації, спробуйте ще раз:", error);
      isAuthenticated.value = false;
    }
  };

  const setTokenData = async () => {
    if (userRolesString.value && idToken.value) {
      return;
    }

    const token = await getMsalToken();
    if (!token) {
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
      console.error(error);
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
