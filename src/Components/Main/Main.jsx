import "./Main.scss";
import React from "react";
import useTheme from "../../Hooks/useTheme";

import LangIcon from "../Lib/Svg/lang";

//Components
import Posts from "../Posts/Posts";

function Main() {
  const [theme, setTheme] = useTheme();

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="main">
      <header className="header">
        <h2 className="header__heading">Home</h2>
        <div onClick={changeTheme}>
          <LangIcon />
        </div>
      </header>

      <Posts />
    </div>
  );
}

export default Main;
