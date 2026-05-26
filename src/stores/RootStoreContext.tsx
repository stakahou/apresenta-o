import { createContext, useContext } from "react";
import { RootStore } from "./RootStore";

const RootStoreContext = createContext<RootStore>({} as RootStore);

export const RootStoreProvider = RootStoreContext.Provider;

export const useStores = () => {
  const context = useContext(RootStoreContext);

  if (!context) {
    throw new Error("useStores must be used within a RootStoreProvider");
  }

  return context;
};
