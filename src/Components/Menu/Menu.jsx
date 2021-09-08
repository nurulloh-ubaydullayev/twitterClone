import "./Menu.scss";
import useLang from "../../Hooks/useLang";

// Components
import SearchTwitter from "../SearchTwitter/SearchTwitter";
import Trends from "../Trends/Trends";
import YouLike from "../YouLike/YouLike";

import Content from "../../Localization/Content";

function Menu() {
  const [lang] = useLang();

  return (
    <div className="menu">
      <SearchTwitter />
      <Trends />
      <YouLike />
      <footer className="footer">
        <div className="privacy-links">
          <a className="footer-link" href="index.html">
            {Content[lang].terms}
          </a>
          <a className="footer-link" href="index.html">
            {Content[lang].policy}
          </a>
          <a className="footer-link" href="index.html">
            {Content[lang].cookiePolicy}
          </a>
        </div>
        <div className="copyright-links">
          <a className="footer-link" href="index.html">
            {Content[lang].imprint}
          </a>
          <a className="footer-link" href="index.html">
            {Content[lang].adsInfo}
          </a>
          <a className="footer-link" href="index.html">
            Mo{Content[lang].menuMore}
          </a>
          <a className="footer-link" href="index.html">
            {Content[lang].coopywrite}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Menu;
