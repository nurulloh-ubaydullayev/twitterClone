import React from "react";
import "./App.scss";
import useTheme from "./Hooks/useTheme";

// Components
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu.";

function App() {
  const [theme] = useTheme();
  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <Sidebar />
        <Main />
        <Menu />
      </div>
    </div>
  );
}

export default App;
