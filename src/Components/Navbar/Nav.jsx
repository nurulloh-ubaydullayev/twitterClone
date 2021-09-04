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

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <HomeIcon />
            <p className="nav__link-text">Home</p>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <ExploreIcon />
            <p className="nav__link-text">Explore</p>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <NotsIcon />
            <p className="nav__link-text">Notifications</p>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <MessagesIcon />
            <p className="nav__link-text">Messages</p>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <BookmarksIcon />
            <p className="nav__link-text">Bookmarks</p>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <ListIcon />
            <p className="nav__link-text">Lists</p>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <ProfileIcon />
            <p className="nav__link-text">Profile</p>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="index.html">
            <MoreIcon />
            <p className="nav__link-text">More</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
