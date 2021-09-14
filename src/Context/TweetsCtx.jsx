import React from "react";

const Context = React.createContext();

function Provider({ children }) {
  const [tweets, setTweets] = React.useState(
    JSON.parse(window.localStorage.getItem("tweets")) || []
  );

  React.useEffect(() => {
    window.localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);
  return (
    <Context.Provider value={{ tweets, setTweets }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
