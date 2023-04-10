import React, { useState } from "react";
import "./loginform.css";

function LoginForm({ isShowLogin, user, setUser, setIsShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passPlaceHolder, setPassPlaceHolder] = useState("password");
  const [userPlaceHolder, setUserPlaceHolder] = useState("username");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/api/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      let resJson = await res.json();
      if (res.status === 200) {
        for (let i = 0; i < resJson.length; i++) {
          if (resJson[i].userName === username) {
            if (resJson[i].password === password) {
              setUser(resJson[i]);
              setIsShowLogin(!isShowLogin);
            } else {
              document.querySelector("passbox").value = "";
              setPassPlaceHolder("Try Again");
            }
          } else {
            setUserPlaceHolder("Try Again");
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form onSubmit={handleSubmit}>
            <h1 className="login-text">Sign In</h1>
            <label>Username</label>
            <br></br>
            <input
              type="text"
              name="username"
              className="login-box text-white"
              placeholder={userPlaceHolder}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br></br>
            <label>Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              className="login-box passbox text-white"
              placeholder={passPlaceHolder}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
