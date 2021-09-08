import React from "react";
import { ContextLang } from "../Context/Language";
const useLang = () => {
  const ctx = React.useContext(ContextLang);

  return [ctx.lang, ctx.setLang];
};

export default useLang;
