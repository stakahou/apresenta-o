import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ChevronRight } from "lucide-react";
import type { INavItem } from "./interfaces";
import { Link } from "react-router-dom";

export const renderSidebarMenu = (
  items: INavItem[],
  onClick?: (id?: string) => void
) => {
  return (
    <>
      {items.map((item) => {
        if (!item.items?.length) {
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                onClick={() => onClick?.(item.id)}
                tooltip={item.title}
                render={
                  <Link to={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                }
              />
            </SidebarMenuItem>
          );
        }

        return (
          <Collapsible
            key={item.title}
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger
                render={
                  <SidebarMenuButton
                    onClick={() => onClick?.(item.id)}
                    tooltip={item.title}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                }
              />
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        onClick={() => onClick?.(item.id)}
                        render={
                          <Link to={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        }
                      />
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        );
      })}
    </>
  );
};
