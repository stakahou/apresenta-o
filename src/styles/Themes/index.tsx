import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

export type Theme = "light" | "dark" | "contrast" | "dark-contrast";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "light"
  );

  useEffect(() => {
    const body = document.body;
    body.classList.remove("dark", "contrast");

    if (theme === "dark") body.classList.add("dark");
    if (theme === "contrast") body.classList.add("contrast");
    if (theme === "dark-contrast") body.classList.add("dark", "contrast");

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
