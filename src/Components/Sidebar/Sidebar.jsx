import "./Sidebar.scss";
import Twitter from "../Lib/Svg/Twitter-logo";
import DotsIcon from "../Lib/Svg/dots";
import UserImg from "../../Assets/Images/sidebar__user-img.png";
import Nav from "../Navbar/Nav";
import useLang from "../../Hooks/useLang";
import Content from "../../Localization/Content";

function Sidebar() {
  const [lang] = useLang();
  return (
    <div className="sidebar">
      <Twitter />
      <Nav lang={lang} content={Content} />
      <a href="index.html" className="tweet-link">
        Tweet
      </a>
      <div type="button" className="sidebar__user">
        <img className="sidebar__user-img" src={UserImg} alt="user avatar" />
        <div className="user-info">
          <h3 className="sidebar__user-name">Bobur</h3>
          <p className="sidebar__user-account">@bobur_mavlonov</p>
        </div>
        <DotsIcon />
      </div>
    </div>
  );
}

export default Sidebar;
