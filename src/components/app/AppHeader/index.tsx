import type { FC, PropsWithChildren } from "react";

export const AppHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full bg-primary text-white flex flex-col gap-2 p-6">
      {children}
    </div>
  );
};
 