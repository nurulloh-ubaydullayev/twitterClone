import "./Nav.scss";

// Images
import HomeIcon from "../Lib/Svg/home-fill";
import ExploreIcon from "../Lib/Svg/explore";
import NotsIcon from "../Lib/Svg/notification";
import MessagesIcon from "../Lib/Svg/messages";
import BookmarksIcon from "../Lib/Svg/bookmarks";
import ListIcon from "../Lib/Svg/lists";
import ProfileIcon from "../Lib/Svg/profile";
import MoreIcon from "../Lib/Svg/more";
import { NavLink } from "react-router-dom";

function Nav({ lang, content }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            <HomeIcon />
            <p className="nav__link-text">{content[lang].home}</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/explore">
            <ExploreIcon />
            <p className="nav__link-text">{content[lang].explore}</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/notifications">
            <NotsIcon />
            <p className="nav__link-text">{content[lang].notification}</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/messages">
            <MessagesIcon />
            <p className="nav__link-text">{content[lang].messages}</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/bookmarks">
            <BookmarksIcon />
            <p className="nav__link-text">{content[lang].bookmarks}</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/lists">
            <ListIcon />
            <p className="nav__link-text">{content[lang].lists}</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/profile">
            <ProfileIcon />
            <p className="nav__link-text">{content[lang].profile}</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/more">
            <MoreIcon />
            <p className="nav__link-text">{content[lang].more}</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
