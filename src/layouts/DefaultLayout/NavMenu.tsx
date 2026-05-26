import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import type { FC } from "react";
import type { INavItem } from "./interfaces";
import { renderSidebarMenu } from "./utils";

interface NavMenuProps {
  items: INavItem[];
}

export const NavMenu: FC<NavMenuProps> = ({ items }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarMenu>{renderSidebarMenu(items)}</SidebarMenu>
    </SidebarGroup>
  );
};
