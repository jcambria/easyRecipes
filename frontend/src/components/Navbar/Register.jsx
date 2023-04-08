import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './register.css';

function Register({ isShowRegister, setIsShowRegister, 
                    isShowLogin, setIsShowLogin}) {


const [userName, setUserName] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/api/user", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          userName: userName,
          firstName: firstName,
          lastName: lastName,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setUserName("");
        setFirstName("");
        setLastName("");
        setPassword("");
        setMessage("User created successfully");
        setIsShowRegister(!isShowRegister);
        setIsShowLogin(!isShowLogin);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

    return (
      <div className={`${isShowRegister ? "active" : ""} show`} >
        <div className="login-form" >
            <div className="form-box solid">
                <form onSubmit={handleSubmit}>
                    <h1 className="login-text">Register</h1>
                    <label>Username</label>
                    <input type="text" name="username" className="login-box text-white" 
                        placeholder='username'
                        onChange={(e) => setUserName(e.target.value)}/>
                    <br></br>
                    <label>First Name</label>
                    <input type="text" name="firstname" className="login-box text-white" 
                        placeholder='First Name'
                        onChange={(e) => setFirstName(e.target.value)}/>
                    <br></br>
                    <label>Last Name</label>
                    <input type="text" name="lastname" className="login-box text-white" 
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}/>
                    <br></br>
                    <label>Password</label>
                    <input type="password" name="password" className="login-box text-white" 
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}/>
                    <br></br>
                    <input type="submit"value="REGISTER" className="login-btn" />
                    
                </form>
                <div className="message text-white">{message ? <p>{message}</p> : null}</div>
            </div>
        </div>
      </div>
    );
  };
  export default Register;