import "./SearchTwitter.scss";

import SearchIcon from "../../Assets/Images/search.png";

function SearchTwitter() {
  return (
    <label className="search__label">
      <img className="search-icon" src={SearchIcon} alt="" />
      <input
        className="search-input"
        type="text"
        placeholder="Search Twitter"
      />
    </label>
  );
}

export default SearchTwitter;
