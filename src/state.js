import { createContext, useContext, useState } from "react";

const INITIAL_STATE = {
  "flowerType": '',
  "flowerSex": '',
  "sepalType": '',
  "sepalCount": '0',
  "sepalColor": '',
  "petalType": '',
  "petalCount": '0',
  "petalColor": '',
  "stamenType": '',
  "stamenCount": '0',
  "stamenArrangement": '',
  "chamberCount": '0',
  "carpelCount": '0',
  "pistilCount": '0',
  "pistilPosition": ''
}

export const AppStateContext = createContext({});

export function AppProvider({ children }) {
  const value = useState(INITIAL_STATE);
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppProvider");
  }
  return context;
}
