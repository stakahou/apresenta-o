import type { LucideIcon } from "lucide-react";

export interface INavItem {
  id?: string;
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?: {
    id?: string;
    title: string;
    url: string;
  }[];
}
