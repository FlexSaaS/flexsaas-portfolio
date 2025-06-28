import React, { createContext, useContext } from "react";
import type { IDatabase } from "./IDatabase";
const DatabaseContext = createContext<IDatabase | null>(null);

export const DatabaseProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: IDatabase;
}) => (
  <DatabaseContext.Provider value={value}>{children}</DatabaseContext.Provider>
);

export const useDatabase = (): IDatabase => {
  const context = useContext(DatabaseContext);
  if (!context)
    throw new Error("useDatabase must be used within DatabaseProvider");
  return context;
};
