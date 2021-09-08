import "./SearchTwitter.scss";
import useLang from "../../Hooks/useLang";

import Content from "../../Localization/Content";

import SearchIcon from "../../Assets/Images/search.png";

function SearchTwitter() {
  const [lang] = useLang();
  return (
    <label className="search__label">
      <img className="search-icon" src={SearchIcon} alt="" />
      <input
        className="search-input"
        type="text"
        placeholder={Content[lang].searchTweet}
      />
    </label>
  );
}

export default SearchTwitter;
