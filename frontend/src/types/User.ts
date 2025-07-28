export interface User {
  id: string;
  displayName?: string | null;
  userPrincipalName: string;
  mail?: string | null;
  givenName?: string | null;
  surname?: string | null;
  role: string;
}
