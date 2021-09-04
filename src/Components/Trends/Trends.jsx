import "./Trends.scss";

import SettingsIcon from "../Lib/Svg/settings";

// Components
import TrendsItem from "../TrendsItem/TrendsItem";

function Trends() {
  return (
    <div className="trends">
      <div className="trends__top">
        <h3 className="trends__heading">Trends for you</h3>
        <SettingsIcon />
      </div>
      <TrendsItem />
      <TrendsItem />
      <TrendsItem />
      <a className="trends__more-link" href="index.html">
        Show more
      </a>
    </div>
  );
}

export default Trends;
