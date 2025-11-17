import type { IconType } from "react-icons";
import {
  SiAmazonaws,
  SiApachekafka,
  SiCplusplus,
  SiCloudinary,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiWindows
} from "react-icons/si";

import { DiDatabase } from "react-icons/di";

// Map only the skills from the array to their corresponding icons
export const techLogos: Record<string, IconType> = {
  C: SiCplusplus,
  "C++": SiCplusplus,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss3,
  "Node.js": SiNodedotjs,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Express: SiExpress,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  SQL: DiDatabase,
  Docker: SiDocker,
  Redis: SiRedis,
  Redux: SiRedux,
  "Socket.IO": SiSocketdotio,
  Linux: SiLinux,
  Windows: SiWindows,
  Git: SiGithub,
  GitHub: SiGithub,
  Cloudinary: SiCloudinary,
  AWS: SiAmazonaws,
  Supabase: SiSupabase,
  "Prisma ORM": SiPrisma,
  "Drizzle ORM": DiDatabase,
  Kafka: SiApachekafka,
  "Tanstack-Query": SiReactquery
}

// Skills array


