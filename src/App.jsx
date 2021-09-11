import React from "react";
import "./App.scss";
import useTheme from "./Hooks/useTheme";
import { Switch } from "react-router-dom";
import Public from "./Routes/Public";
import Private from "./Routes/Private";
import useToken from "./Hooks/useToken";

// Pages
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";

// Components
import Sidebar from "./Components/Sidebar/Sidebar";
import Menu from "./Components/Menu/Menu";

function App() {
  const [theme] = useTheme();

  const [token] = useToken();

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <Sidebar />
        <Switch>
          <Public path="/" component={Main} exact />
          <Public path="/login" component={Login} exact />
          <Private path="/profile" component={Profile} exact />
        </Switch>
        {/* <Main /> */}
        <Menu />
      </div>
    </div>
  );
}

export default App;
