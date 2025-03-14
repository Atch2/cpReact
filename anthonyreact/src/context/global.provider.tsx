import { ReactNode, useState } from "react";
import { GlobalContext } from "./global.context";

const EmtyGlobalState: number = 0;

interface GlobalProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProps) => {
  const [value, setValue] = useState<number>(EmtyGlobalState);

  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  );
};
