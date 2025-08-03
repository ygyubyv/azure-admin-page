import type { PageOverview } from "@/types/PageOverview";

export const pagesOverview: PageOverview[] = [
  {
    title: "Me",
    text: `The “Me” page is your personal dashboard. Here you can see all the
      claims decoded from your ID token—things like your user ID, email,
      roles, authentication time, and any custom attributes. Use this view
      to verify that your login flow is working and that your token contains
      the correct information.`,
  },
  {
    title: "Users",
    text: `On the “Users” page you’ll find the five most recently registered
      users, fetched directly from Microsoft Graph. Each entry shows the
      display name, user ID, assigned role, and registration timestamp. This
      gives you a live look at who’s joined the application and what roles
      they have.`,
  },
  {
    title: "Admin",
    text: `The “Admin” page is only accessible if your token includes the
      extension_AzureAdminPageRole claim. Here you can edit user roles,
      remove accounts, and test all administrative functions. Be careful—
      deleting a user here will remove it from the entire tenant.`,
  },
];
