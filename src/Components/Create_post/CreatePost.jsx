import React from "react";
import "./CreatePost.scss";

import Content from "../../Localization/Content";

import useLang from "../../Hooks/useLang";

// Images
import OwnerAvatar from "../../Assets/Images/sidebar__user-img.png";
import ImageIcon from "../Lib/Svg/image";
import GifIcon from "../Lib/Svg/gif";
import StatsIcon from "../Lib/Svg/stats";
import SmileIcon from "../Lib/Svg/smile";
import ScheduleIcon from "../Lib/Svg/schedule";

function CreatePost() {
  const [lang] = useLang();
  return (
    <div className="post__owner">
      <img
        className="create__owner-avatar"
        src={OwnerAvatar}
        alt="Owner avatar"
      />
      <div className="post__content">
        <form className="create__post-form">
          <input
            className="create__form-text"
            type="text"
            placeholder={Content[lang].heppening}
          />
          <div className="form-bottom">
            <div className="form__attach-media">
              <label className="form__img-label">
                <ImageIcon bgColor="#1D9BF0" />
                <input className="form__load-img" type="file" />
              </label>
              <label className="form__gif-label">
                <GifIcon bgColor="#1D9BF0" />
                <input className="form__load-gif" type="file" />
              </label>
              <button className="form__stats-btn" type="button">
                <StatsIcon bgColor="#1D9BF0" />
              </button>
              <button className="form__smile-btn" type="button">
                <SmileIcon bgColor="#1D9BF0" />
              </button>
              <label className="form__date-label">
                <ScheduleIcon bgColor="#1D9BF0" />
                <input className="form__date" type="date" />
              </label>
            </div>
            <button className="form__submit" type="submit">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
