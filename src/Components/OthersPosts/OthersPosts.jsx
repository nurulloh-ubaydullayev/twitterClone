import "./OthersPost.scss";
import React from "react";
import { data } from "../Storage/data";
import Tweet from "../Tweet/Tweet";

// Images
import postAvatar from "../../Assets/Images/post-avatar1.png";
import CommentIcon from "../Lib/Svg/comment";
import RetweetIcon from "../Lib/Svg/retweet";
import LikeFillIcon from "../Lib/Svg/like-fill";
import LikeIcon from "../Lib/Svg/like";
import ShareIcon from "../Lib/Svg/share";
import StatisticsIcon from "../Lib/Svg/statistics";
import MoreImg from "../../Assets/Images/more.png";
import User2Avatar from "../../Assets/Images/user2.png";
import ShashlikImg from "../../Assets/Images/shashlik.jpg";

function OthersPost() {
  // const likeBtn = React.useRef("");
  const [likeIconColor, setLikeColor] = React.useState(false);

  React.useRef(() => {}, [likeIconColor]);
  return (
    <ul>
      {data &&
        data.map((row) => (
          <Tweet key={row.id}>
            {
              <>
                <img className="post-avatar" src={postAvatar} alt="Post user" />
                <div className="post">
                  <div className="post-owner">
                    <h3 className="post-owner__name">Designsta</h3>
                    <span className="post-owner__account">
                      @inner · <span className="creation-time">25m</span>
                    </span>
                  </div>
                  <div className="post-text">{row.content}</div>
                  <div className="post__buttons">
                    <button className="post__about-btn">
                      <CommentIcon />
                      <span className="commets-count">10</span>
                    </button>
                    <button className="post__about-btn">
                      <RetweetIcon />
                      <span className="retweets-count">1</span>
                    </button>
                    <button
                      className="post__about-btn"
                      onClick={() => setLikeColor(!likeIconColor)}
                    >
                      <LikeIcon likeColor={likeIconColor} />
                      <span className="like-count">8</span>
                    </button>
                    <button className="post__about-btn">
                      <ShareIcon />
                    </button>
                    <button className="post__about-btn">
                      <StatisticsIcon />
                    </button>
                  </div>
                </div>

                <button className="posts__more-btn">
                  <img src={MoreImg} alt="more button" />
                </button>
              </>
            }
          </Tweet>
        ))}

      <li className="others-post">
        <img className="post-avatar" src={postAvatar} alt="Post user" />
        <div className="post">
          <div className="post-owner">
            <h3 className="post-owner__name">Designsta</h3>
            <span className="post-owner__account">
              @inner · <span className="creation-time">25m</span>
            </span>
          </div>
          <div className="post-text">
            Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
            zerikmadinglarmi?
          </div>
          <div className="post__buttons">
            <button className="post__about-btn">
              <CommentIcon />
              <span className="commets-count">10</span>
            </button>
            <button className="post__about-btn">
              <RetweetIcon />
              <span className="retweets-count">1</span>
            </button>
            <button
              className="post__about-btn"
              onClick={() => setLikeColor(!likeIconColor)}
            >
              <LikeIcon likeColor={likeIconColor} />
              <span className="like-count">8</span>
            </button>
            <button className="post__about-btn">
              <ShareIcon />
            </button>
            <button className="post__about-btn">
              <StatisticsIcon />
            </button>
          </div>
        </div>

        <button className="posts__more-btn">
          <img src={MoreImg} alt="more button" />
        </button>
      </li>

      <li className="others-post">
        <img className="post-avatar" src={User2Avatar} alt="Post user" />
        <div className="post">
          <div className="post-owner">
            <h3 className="post-owner__name">cloutexhibition</h3>
            <span className="post-owner__account">
              @RajLahoti · <span className="creation-time">22m</span>
            </span>
          </div>
          <div className="post-text">
            YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
            Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini
            ko’rib hursand bo’ladi odam.
          </div>
          <div className="post__buttons">
            <button className="post__about-btn">
              <CommentIcon />
              <span className="commets-count"></span>
            </button>
            <button className="post__about-btn">
              <RetweetIcon />
              <span className="retweets-count">1</span>
            </button>
            <button className="post__about-btn">
              <LikeFillIcon />
              <span className="like-count">9</span>
            </button>
            <button className="post__about-btn">
              <ShareIcon />
            </button>
            <button className="post__about-btn">
              <StatisticsIcon />
            </button>
          </div>
        </div>

        <button className="posts__more-btn">
          <img src={MoreImg} alt="more button" />
        </button>
      </li>

      <li className="others-post">
        <img className="post-avatar" src={postAvatar} alt="Post user" />
        <div className="post">
          <div className="post-owner">
            <h3 className="post-owner__name">CreativePhoto</h3>
            <span className="post-owner__account">
              @cloutexhibition · <span className="creation-time">1h</span>
            </span>
          </div>
          <div className="post-text">
            Обетда..... <br /> Кечиринглар
          </div>
          <img
            className="post__img"
            src={ShashlikImg}
            alt=""
            width="679"
            height="453"
          />
          <div className="post__buttons">
            <button className="post__about-btn">
              <CommentIcon />
              <span className="commets-count">10</span>
            </button>
            <button className="post__about-btn">
              <RetweetIcon />
              <span className="retweets-count">1</span>
            </button>
            <button className="post__about-btn">
              <LikeIcon likeColor={likeIconColor} />
              <span className="like-count">8</span>
            </button>
            <button className="post__about-btn">
              <ShareIcon />
            </button>
            <button className="post__about-btn">
              <StatisticsIcon />
            </button>
          </div>
        </div>

        <button className="posts__more-btn">
          <img src={MoreImg} alt="more button" />
        </button>
      </li>
    </ul>
  );
}

export default OthersPost;
