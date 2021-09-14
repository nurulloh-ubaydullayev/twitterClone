import React from "react";
import { Context } from "../Context/TweetsCtx";

const useTweets = () => {
  const ctx = React.useContext(Context);

  return [ctx.tweets, ctx.setTweets];
};

export default useTweets;
