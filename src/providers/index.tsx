import rootStore from "@/stores/RootStore";
import { RootStoreProvider } from "@/stores/RootStoreContext";
import { FontSizeProvider } from "@/styles/FontSize";
import { ThemeProvider } from "@/styles/Themes";
import type { JSX } from "react";

const providers: JSX.Element[] = [
  <RootStoreProvider value={rootStore} />,
  <ThemeProvider />,
  <FontSizeProvider />,
];

export default providers;
