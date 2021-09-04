import "./YouLike.scss";

// Images
import MushtariyAvatar from "../../Assets/Images/Mushtariy-avatar.png";
import ShuxratAvatar from "../../Assets/Images/Shuxrat-avatar.png";

function YouLike() {
  return (
    <div className="you-like">
      <h3 className="you-like__heading">You might like</h3>
      <div className="you-like__item">
        <img
          className="you-like__item__avatar"
          src={MushtariyAvatar}
          alt=""
          width="60"
          height="60"
        />
        <div className="you-like__info">
          <span className="you-like__name">Mushtariy</span>
          <span className="you-like__account">@Mushtar565266</span>
        </div>
        <a className="you-like__follow-link" href="index.html">
          Follow
        </a>
      </div>
      <div className="you-like__item">
        <img
          className="you-like__item__avatar"
          src={ShuxratAvatar}
          alt=""
          width="60"
          height="60"
        />
        <div className="you-like__info">
          <span className="you-like__name">Shuhratbek</span>
          <span className="you-like__account">@mrshukhrat</span>
        </div>
        <a className="you-like__follow-link" href="index.html">
          Follow
        </a>
      </div>
      <a className="you-like__more-link" href="index.html">
        Show more
      </a>
    </div>
  );
}

export default YouLike;
