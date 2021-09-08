import "./Trends.scss";
import useLang from "../../Hooks/useLang";
import SettingsIcon from "../Lib/Svg/settings";
import Content from "../../Localization/Content";

// Components
import TrendsItem from "../TrendsItem/TrendsItem";

function Trends() {
  const [lang] = useLang();
  return (
    <div className="trends">
      <div className="trends__top">
        <h3 className="trends__heading">{Content[lang].trend}</h3>
        <SettingsIcon />
      </div>
      <TrendsItem />
      <TrendsItem />
      <TrendsItem />
      <a className="trends__more-link" href="index.html">
        {Content[lang].trendsMore}
      </a>
    </div>
  );
}

export default Trends;
