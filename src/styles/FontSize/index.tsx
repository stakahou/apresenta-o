import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

export type FontSize = "sm" | "md" | "lg" | "xl";

const FONT_MAP: Record<FontSize, string> = {
  sm: "90%",
  md: "100%",
  lg: "112.5%",
  xl: "125%",
};

interface FontSizeContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const FontSizeContext = createContext<FontSizeContextType | null>(null);

export const FontSizeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [fontSize, setFontSize] = useState<FontSize>(
    () => (localStorage.getItem("fontSize") as FontSize) || "md"
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--font-scale",
      FONT_MAP[fontSize]
    );

    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => {
  const ctx = useContext(FontSizeContext);
  if (!ctx) throw new Error("useFontSize must be used inside FontSizeProvider");
  return ctx;
};
