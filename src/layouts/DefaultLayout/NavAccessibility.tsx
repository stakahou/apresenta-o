import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { useFontSize, type FontSize } from "@/styles/FontSize";
import { useTheme } from "@/styles/Themes";
import type { FC } from "react";
import type { INavItem } from "./interfaces";
import { renderSidebarMenu } from "./utils";

interface NavAccessibilityProps {
  items: INavItem[];
}

export const NavAccessibility: FC<NavAccessibilityProps> = ({ items }) => {
  const { theme, setTheme } = useTheme();
  const { fontSize, setFontSize } = useFontSize();

  const size: FontSize[] = ["sm", "md", "lg", "xl"];

  const handleClick = (id?: string) => {
    switch (id) {
      case "contrast": {
        if (theme !== "dark") {
          setTheme("dark");
        }

        if (theme === "dark") {
          setTheme("light");
        }
        break;
      }

      case "increase_font": {
        const index = size.findIndex((s) => s === fontSize);
        const next = size?.[index + 1];
        if (next) {
          setFontSize(next);
        }
        break;
      }

      case "decrease_font": {
        const index = size.findIndex((s) => s === fontSize);
        const prev = size?.[index - 1];
        if (prev) {
          setFontSize(prev);
        }
        break;
      }
    }
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">Acessibilidade</SidebarGroupLabel>
      <SidebarMenu>{renderSidebarMenu(items, handleClick)}</SidebarMenu>
    </SidebarGroup>
  );
};
