import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/useAuthStore";
import { showNotification } from "@/helpers/showNotification";
import { showErrorCodeMessage } from "@/helpers/showErrorCodeMessage";
import { parseRolesFromString, stringifyRoles } from "@/helpers/roleConverters";
import type { User } from "@/types/User";

export const useAdminPanel = (user: User) => {
  const targetRolesArray = parseRolesFromString(user.role);
  const newRoles = ref([...targetRolesArray]);

  const { bearerToken } = storeToRefs(useAuthStore());

  const isUser = computed(() => {
    return user.role.includes("user");
  });

  const isOwner = computed(() => {
    return user.role.includes("owner");
  });

  const hasChanges = computed(() => {
    return JSON.stringify(newRoles.value) !== JSON.stringify(targetRolesArray);
  });

  const onSubmit = async () => {
    if (!hasChanges.value) {
      showNotification("warning", "No changes detected");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:7071/api/users/${user.id}/roles`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${bearerToken.value}`,
          },
          body: JSON.stringify({
            targetUserRoles: stringifyRoles(newRoles.value),
          }),
        }
      );

      if (!response.ok) {
        showErrorCodeMessage(response.status);
        return;
      }

      showNotification("success", "Updated successfully");

      const result = await response.json();
      console.log(`Response for ${user.id}:`, result);
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:7071/api/users/${user.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${bearerToken.value}`,
          },
        }
      );

      if (response.status === 204) {
        showNotification("success", "Successfully deleted");
        return;
      }

      if (!response.ok) {
        showErrorCodeMessage(response.status);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { isUser, isOwner, newRoles, onDelete, onSubmit };
};
