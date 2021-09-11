import "./Main.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import useTheme from "../../Hooks/useTheme";
import useLang from "../../Hooks/useLang";
import useToken from "../../Hooks/useToken";

import LangIcon from "../../Components/Lib/Svg/lang";
import Content from "../../Localization/Content";

//Components
import Posts from "../../Components/Posts/Posts";

function Main() {
  const [theme, setTheme] = useTheme();
  const [lang, setLang] = useLang();
  const [token] = useToken();

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

        {!token && <NavLink to="/login">Login</NavLink>}

        <div onClick={changeTheme}>
          <LangIcon />
        </div>
      </header>

      <Posts />
    </div>
  );
}

export default Main;
