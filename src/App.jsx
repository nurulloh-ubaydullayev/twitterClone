import React from "react";
import "./App.scss";

// Components
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu.";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Sidebar />
        <Main />
        <Menu />
      </div>
    </div>
  );
}

export default App;
