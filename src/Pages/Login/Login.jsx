import "./Login.scss";
import useToken from "../../Hooks/useToken";
import React from "react";

function Login() {
  const [setToken] = useToken(true);

  return (
    <>
      <div className="login">
        <button
          onClick={() => setToken("bhjwet6fwvefyuvgh")}
          className="login-btn"
        >
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
