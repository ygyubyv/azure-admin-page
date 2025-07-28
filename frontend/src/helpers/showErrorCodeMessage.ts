import { showNotification } from "./showNotification";

export const showErrorCodeMessage = (statusCode: number) => {
  switch (statusCode) {
    case 400:
      showNotification("error", "Bad request. Arguments are missing.");
      break;
    case 401:
      showNotification("error", "Unauthorized. Please log in again.");
      break;
    case 403:
      showNotification(
        "error",
        "You don't have permission to perform this action."
      );
      break;
    case 404:
      showNotification("error", "Resourse not found.");
      break;
    case 500:
      showNotification("error", "Server error. Please try again later.");
      break;
    default:
      showNotification("error", "Unexpected error occurred.");
      break;
  }
};
