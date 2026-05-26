import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import type { ComponentPropsWithoutRef, FC } from "react";
import { AppSidebarFooter } from "./AppSidebarFooter";
import { CollapseMenu } from "./CollapseMenu";
import { NavAccessibility } from "./NavAccessibility";
import { NavMenu } from "./NavMenu";

import logo from "@/assets/images/logo_adata_1.svg";
import logo2 from "@/assets/images/logo_adata_2.svg";
import { Link } from "react-router-dom";
import sidebarLinks from "./sidebarLinks";

interface AppSidebarProps extends ComponentPropsWithoutRef<typeof Sidebar> {}

export const AppSidebar: FC<AppSidebarProps> = (props) => {
  return (
    <Sidebar
      variant="inset"
      {...props}
      className="group-data-[state=collapsed]:border-r"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              render={
                <Link to="/">
                  <img
                    alt="logo"
                    src={logo}
                    className="h-14 w-auto group-data-[state=collapsed]:hidden"
                  />
                  <img
                    alt="logo"
                    src={logo2}
                    className="h-14 w-auto group-data-[state=expanded]:hidden"
                  />
                </Link>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMenu items={sidebarLinks.menu} />
        <NavAccessibility items={sidebarLinks.accessibility} />
        <CollapseMenu />
      </SidebarContent>

      <SidebarSeparator className="self-center mt-4.5 mb-2 group-data-[collapsible=icon]:hidden" />

      <SidebarFooter className="group-data-[collapsible=icon]:hidden">
        <AppSidebarFooter />
      </SidebarFooter>
    </Sidebar>
  );
};
