import "./Main.scss";
import React from "react";
import useTheme from "../../Hooks/useTheme";
import useLang from "../../Hooks/useLang";

import LangIcon from "../Lib/Svg/lang";
import Content from "../../Localization/Content";

//Components
import Posts from "../Posts/Posts";

function Main() {
  const [theme, setTheme] = useTheme();
  const [lang, setLang] = useLang();
  console.log(lang);

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="main">
      <header className="header">
        <h2 className="header__heading">{Content[lang].home}</h2>
        <select
          onChange={(evt) => {
            setLang(evt.target.value);
          }}
          value={lang}
        >
          <option value="en">en</option>
          <option value="ru">ru</option>
          <option value="uz">uz</option>
        </select>
        <div onClick={changeTheme}>
          <LangIcon />
        </div>
      </header>

      <Posts />
    </div>
  );
}

export default Main;
