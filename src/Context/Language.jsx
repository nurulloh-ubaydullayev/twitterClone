import React from "react";

const ContextLang = React.createContext();

function LangProvider({ children }) {
  const [lang, setLang] = React.useState(
    window.localStorage.getItem("lang") || "en"
  );
  React.useEffect(() => {
    window.localStorage.setItem("lang", lang);
  }, [lang]);
  return (
    <ContextLang.Provider value={{ lang, setLang }}>
      {children}
    </ContextLang.Provider>
  );
}

export { ContextLang, LangProvider };
