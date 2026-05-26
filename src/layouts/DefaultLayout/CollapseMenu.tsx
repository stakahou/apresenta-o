import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import type { FC } from "react";

export const CollapseMenu: FC = () => {
  return (
    <>
      <SidebarSeparator className="self-center group-data-[state=expanded]:hidden" />

      <SidebarGroup className="group-data-[state=expanded]:mt-auto">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={
                <SidebarTrigger className="justify-between cursor-pointer" />
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
};
