import "./TrendsItem.scss";
import Content from "../../Localization/Content";

import useLang from "../../Hooks/useLang";

import TrendMoreIcon from "../Lib/Svg/dots";

function TrendsItem() {
  const [lang] = useLang();
  return (
    <div className="trend__item">
      <div className="trend__item-info">
        <span className="trend-country">{Content[lang].trending}</span>
        <h4 className="trend__item-heading">{Content[lang].revolution}</h4>
        <span className="trend__tweets-count">50.4K Tweets</span>
      </div>
      <button className="trend__more-btn">
        <TrendMoreIcon />
      </button>
    </div>
  );
}

export default TrendsItem;
