import {
  AArrowDown,
  AArrowUp,
  Boxes,
  ClipboardPenLine,
  Contrast,
  Folder,
  House,
  Moon,
  Sun,
} from "lucide-react";

export default {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  menu: [
    {
      title: "Home",
      url: "/",
      icon: House,
    },
    {
      title: "Realizar Simulações",
      url: "#",
      icon: ClipboardPenLine,
      isActive: false,
      items: [
        {
          title: "Exploração Inteligente",
          url: "/smart-exploration",
        },
        {
          title: "Simulação Única",
          url: "#",
        },
      ],
    },
    {
      title: "Simulações Anteriores",
      url: "#",
      icon: Boxes,
    },
    {
      title: "Documentação",
      url: "#",
      icon: Folder,
    },
  ],
  accessibility: [
    {
      title: "Aumentar Fonte",
      url: "#",
      icon: AArrowUp,
      id: "increase_font",
    },
    {
      title: "Diminuir Fonte",
      url: "#",
      icon: AArrowDown,
      id: "decrease_font",
    },
    {
      title: "Ativar Alto Contraste",
      url: "#",
      icon: Contrast,
      id: "contrast",
    },
    {
      title: "Usar Dark Mode",
      url: "#",
      icon: Moon,
    },
    {
      title: "Usar Light Mode",
      url: "#",
      icon: Sun,
    },
  ],
};
