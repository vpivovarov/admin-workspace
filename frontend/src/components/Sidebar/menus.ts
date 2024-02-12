import { icons } from "../../icons";

export interface Menu {
  title: string;
  path: string;
  icon: string;
}

export const menus: Menu[] = [
  {
    title: "Home",
    path: "/",
    icon: icons.home,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: icons.dashboard,
  },
  {
    title: "Database",
    path: "/database",
    icon: icons.database,
  },
  {
    title: "Socials",
    path: "/socials",
    icon: icons.person,
  },
];
