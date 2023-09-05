import React, { createContext, useContext, useState } from "react";

const context = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    language: "en",
    darkmode: false,
  });

  return (
    <context.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </context.Provider>
  );
}

export default context