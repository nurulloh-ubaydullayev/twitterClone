import "./Menu.scss";

// Components
import SearchTwitter from "../SearchTwitter/SearchTwitter";
import Trends from "../Trends/Trends";
import YouLike from "../YouLike/YouLike";

function Menu() {
  return (
    <div className="menu">
      <SearchTwitter />
      <Trends />
      <YouLike />
      <footer className="footer">
        <div className="privacy-links">
          <a className="footer-link" href="index.html">
            Terms of Service
          </a>
          <a className="footer-link" href="index.html">
            Privacy Policy
          </a>
          <a className="footer-link" href="index.html">
            Cookie Policy
          </a>
        </div>
        <div className="copyright-links">
          <a className="footer-link" href="index.html">
            Imprint
          </a>
          <a className="footer-link" href="index.html">
            Ads Info
          </a>
          <a className="footer-link" href="index.html">
            More ···
          </a>
          <a className="footer-link" href="index.html">
            © 2021 Twitter, Inc.
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Menu;
