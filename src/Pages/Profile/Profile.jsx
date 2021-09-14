import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import "./Profile.scss";
import useToken from "../../Hooks/useToken";
import PrevArrow from "../../Components/Lib/Svg/prev-arrow";
import Tweets from "../../Components/Tweets/Tweets";
import Media from "../../Components/Media/Media";

// Images
import userTopBgIMg from "../../Assets/Images/user-profile-bg-img.jpg";
import ProfileAvatar from "../../Assets/Images/profile-avatar.png";
import LocationIcon from "../../Components/Lib/Svg/location-icon";
import TmeLink from "../../Components/Lib/Svg/tme-link";
import BirthIcon from "../../Components/Lib/Svg/birth-icon";
import CalendarIcon from "../../Components/Lib/Svg/calendar";

function Profile() {
  const [setToken] = useToken(true);
  return (
    <div className="profile-page">
      <div className="profile-header">
        <PrevArrow />
        <div>
          <h2 className="profile__user">Bobur</h2>
          <p className="profile__tweets-count">1,070 Tweets</p>
        </div>
      </div>

      <div className="user__profile">
        <div className="user__profile-top">
          <img src={userTopBgIMg} alt="" width={935} height={280} />
        </div>
        <div className="user__profile-bottom">
          <img
            className="user__profile-avatar"
            src={ProfileAvatar}
            alt="User avatar"
            width={150}
            height={150}
          />
          <button className="edit-profile">Edit profile</button>
        </div>
        <div className="profile__info">
          <div className="profile-username">
            <h3 className="profile-owner__name">Bobur</h3>
            <span className="profile-owner__account">@bobur_mavlonov</span>
          </div>

          <div className="owner__more-info">
            <p className="owner__work">
              UX&UI designer at{" "}
              <a
                className="work-place__link"
                target="blank"
                href="https:www.kun.uz"
              >
                @abutechuz
              </a>
            </p>

            <div className="owner-links">
              <a className="location" href="index.html">
                <LocationIcon />
                <span>Mashag’daman</span>
              </a>
              <a
                className="owner__tme-link"
                href="t.me/boburjon_mavlonov"
                target="blank"
              >
                <TmeLink />
                <span>t.me/boburjon_mavlonov</span>
              </a>

              <span className="date-birth">
                <BirthIcon />
                <span>Born November 24, 2000</span>
              </span>

              <span className="joined-date">
                <CalendarIcon />
                <span>Joined May 2020</span>
              </span>
            </div>

            <div className="communication">
              <div className="following-count">
                67 <span>Following</span>
              </div>
              <div className="followers-count">
                47 <span>Followers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="media-tweets">
          <button className="teewts-separation">
            <NavLink
              className="teewts-separation__link active--link"
              to="/profile/tweets"
              exact
            >
              Tweets
            </NavLink>
          </button>
          <button className="teewts-separation">
            <NavLink
              className="teewts-separation__link"
              to="/profile/teewts&replies"
              exact
            >
              Tweets & replies
            </NavLink>
          </button>
          <button className="teewts-separation">
            <NavLink className="teewts-separation__link" to="/profile/media">
              Media
            </NavLink>
          </button>
          <button className="teewts-separation">
            <NavLink
              className="teewts-separation__link"
              to="/profile/likes"
              exact
            >
              Likes
            </NavLink>
          </button>
        </div>
      </div>

      <Switch>
        <Route path="/profile/tweets" component={Tweets} />
        <Route path="/profile/media" component={Media} />
      </Switch>

      <h1>Profile</h1>
      <button
        title="Double click to log out"
        onDoubleClick={() => setToken(false)}
      >
        Log out
      </button>
    </div>
  );
}

export default Profile;
