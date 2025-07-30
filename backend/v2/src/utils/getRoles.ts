import { OWNER } from "../config";

const { email: OWNER_EMAIL } = OWNER;

export const getRoles = (email: string) => {
  const isOwner = email === OWNER_EMAIL;

  return isOwner ? "user, analyst, moderator, admin, owner" : "user";
};
