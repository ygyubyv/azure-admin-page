import type { RbacApproach } from "@/types/RbacApproach";

export const rbacApproaches: RbacApproach[] = [
  {
    title: "1. Microsoft Graph API Approach",
    description:
      "Roles and other claims are managed directly in Azure Active Directory Business to Consumer and can be retrieved either from the ID token or dynamically via Microsoft Graph API.",

    pros: [
      "No need to maintain a separate database for role storage.",
      "Supports SSO out of the box: Users can seamlessly access multiple applications under one tenant with the same login.",
      "Security through token-based access: queries require valid access tokens, improving control and traceability.",
      "Centralized identity and access management within Azure ecosystem.",
      "High stability and scalability: Microsoft Graph API is hosted on Azure's robust infrastructure, designed to handle large-scale traffic reliably.",
    ],

    cons: [
      "Custom claims require globally unique names — this can become confusing across multiple apps.",
      "SSO maintenance complexity: Removing a user deletes them from all tenant applications, complicating user lifecycle management.",
      "Limited flexibility: Custom mappings or logic require advanced Entra configuration or external tools.",
      "Microsoft Graph API performance is slow, even for basic queries. This impacts UX, especially during login flows.",
      "Microsoft Graph for Azure AD B2C offers very limited support for filtering, sorting, or pagination of user data.",
    ],

    whenToUse: [
      "Your application only needs a small amount of identity metadata (e.g., 1–2 fields like role).",
      "You want to avoid managing your own user database and rely solely on Azure.",
      "Security and centralized control are more important than performance or query flexibility.",
    ],
  },
  {
    title: "2. External Database Approach (Recommended)",
    description:
      "Users and roles are stored in your own backend database — in our case, MongoDB — synchronized with Azure Active Directory Business to Consumer during user creation. This approach is highly recommended for production-grade applications where performance and flexibility are critical.",
    pros: [
      "Extremely fast: ~40-70ms response time vs 400–1500ms from Graph API.",
      "Maximum flexibility: Full control over queries, filtering, pagination, or even GraphQL if desired.",
      "Easy integration of custom claims: Any additional data or rules can be injected from the backend.",
      "Supports advanced use cases: Role-based access, permissions, multi-tenancy, etc.",
      "Simplifies testing and maintenance: Everything is under your control.",
    ],
    cons: [
      "Requires extra backend logic: Syncing users on creation.",
      "Lower security by default: You’re responsible for securing endpoints and preventing data leaks.",
      "Potential for overload: Unlike Graph API, performance under high load depends on your infrastructure.",
    ],
    whenToUse: [
      "You need a fast, flexible, and scalable user management system.",
      "You want to decouple user logic from the identity provider.",
      "Your users have many custom fields or app-specific metadata.",
      "You want full control over role resolution and permissions logic.",
    ],
  },
];
