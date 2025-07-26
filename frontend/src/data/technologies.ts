import vueIcon from "@/assets/images/tech/vue.svg";
import tsIcon from "@/assets/images/tech/typescript.png";
import tailwindIcon from "@/assets/images/tech/tailwindcss.png";
import azureIcon from "@/assets/images/tech/azure-ad-b2c.png";
import graphApiIcon from "@/assets/images/tech/microsoft-graph.png";
import azureFuncIcon from "@/assets/images/tech/azure-functions.png";
import nodeJS from "@/assets/images/tech/node-js.png";
import mongoDB from "@/assets/images/tech/mongo-db.svg";
import type { Tech } from "@/types/Tech";

export const technologies: Tech[] = [
  { name: "Vue 3", imageUrl: vueIcon },
  { name: "TypeScript", imageUrl: tsIcon },
  { name: "Tailwind CSS", imageUrl: tailwindIcon },
  { name: "Azure AD B2C", imageUrl: azureIcon },
  { name: "Azure Functions", imageUrl: azureFuncIcon },
  { name: "Microsoft Graph API", imageUrl: graphApiIcon },
  { name: "Node JS", imageUrl: nodeJS },
  { name: "Mongo DB", imageUrl: mongoDB },
];
