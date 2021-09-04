import "./TrendsItem.scss";

import TrendMoreIcon from "../Lib/Svg/dots";

function TrendsItem() {
  return (
    <div className="trend__item">
      <div className="trend__item-info">
        <span className="trend-country">Trending in Germany</span>
        <h4 className="trend__item-heading">Revolution</h4>
        <span className="trend__tweets-count">50.4K Tweets</span>
      </div>
      <button className="trend__more-btn">
        <TrendMoreIcon />
      </button>
    </div>
  );
}

export default TrendsItem;
