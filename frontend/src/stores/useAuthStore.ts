import { ref } from "vue";
import { defineStore } from "pinia";
import { loginRequest, myMSALObj } from "@/azure/msalConfig";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);
  const isInitialized = ref(false);

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

  const getAccessToken = async () => {
    try {
      const response = await myMSALObj.acquireTokenSilent(loginRequest);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isAuthenticated,
    isInitialized,
    login,
    logout,
    initAuth,
    getAccessToken,
  };
});
