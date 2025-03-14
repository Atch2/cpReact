import { createContext, useContext } from "react";

interface GlobalContextType {
  value: number | null;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalContext = createContext<GlobalContextType>({
  value: null,
  setValue: () => {},
});

export const useGlobalContext = () => {
  const constext = useContext(GlobalContext);

  if (!constext.value && constext.value !== 0) {
    throw new Error(
      "GlobalContext must be used within a GlobalContextProvider",
    );
  }

  return constext;
};
