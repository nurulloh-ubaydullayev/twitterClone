import "./Main.scss";
import LangIcon from "../Lib/Svg/lang";

//Components
import Posts from "../Posts/Posts";

function Main() {
  return (
    <div className="main">
      <header className="header">
        <h2 className="header__heading">Home</h2>
        <LangIcon />
      </header>

      <Posts />
    </div>
  );
}

export default Main;
