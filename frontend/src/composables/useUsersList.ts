import { ref } from "vue";
import type { User } from "@/types/User";

export const useUsersList = () => {
  const users = ref<User | null>(null);
};
