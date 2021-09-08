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

function Nav({ lang, content }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <HomeIcon />
            <p className="nav__link-text">{content[lang].home}</p>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <ExploreIcon />
            <p className="nav__link-text">{content[lang].explore}</p>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <NotsIcon />
            <p className="nav__link-text">{content[lang].notification}</p>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <MessagesIcon />
            <p className="nav__link-text">{content[lang].messages}</p>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <BookmarksIcon />
            <p className="nav__link-text">{content[lang].bookmarks}</p>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <ListIcon />
            <p className="nav__link-text">{content[lang].lists}</p>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <ProfileIcon />
            <p className="nav__link-text">{content[lang].profile}</p>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <MoreIcon />
            <p className="nav__link-text">{content[lang].more}</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
