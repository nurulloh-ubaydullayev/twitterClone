import React from "react";
import "./App.scss";
import useTheme from "./Hooks/useTheme";

// Components
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu.";

function App() {
  const [theme, setTheme] = useTheme();
  return (
    <div className={`app ${theme}`}>
      <div className="container">
        {/* <select value={theme} onChange={(evt) => setTheme(evt.target.value)}>
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select> */}
        <Sidebar />
        <Main />
        <Menu />
      </div>
    </div>
  );
}

export default App;
