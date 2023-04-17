import React, { useState } from 'react';
import './loginform.css';


function Register({ isShowRegister, setIsShowRegister, 
                    isShowLogin, setIsShowLogin}) {

  

const [userName, setUserName] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
const [placeholderUserName, setPlaceholderUserName] = useState("User Name");
const [placeholderFirstName, setPlaceholderFirstName] = useState("First Name");
const [placeholderLastName, setPlaceholderLastName] = useState("Last Name");
const [placeholderPassword, setPlaceholderPassword] = useState("Password");


let handleSubmit = async (e) => {
  e.preventDefault();
      if (userName !== "" ) {
        if (firstName !== "" ) {
          if (lastName !== "" ) {
            if (password !== "" ) {
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
          
                if (res.status === 200) {
                  setUserName("");
                  setFirstName("");
                  setLastName("");
                  setPassword("");
                  setMessage("User created successfully");
                  setIsShowRegister(!isShowRegister);
                  setIsShowLogin(!isShowLogin);
                } else {
                  setMessage("Error occurred");
                }
              } catch (err) {
                console.log(err);
              }
            }else{
              setPlaceholderPassword("Password");
              setMessage("Password doesn't meet the requirements")
            }
            
          }else{
            setPlaceholderLastName("Last Name");
            setMessage("Invalid Last Name")
          }
          
        }else{
          setPlaceholderFirstName("First Name")
          setMessage("Invalid First Name")
        }
        
      }else{
        setPlaceholderUserName("User Name")
        setMessage("Invalid User Name")
      }


  };

    return (
      <div className={`${isShowRegister ? "active" : ""} show`} >
        <div className="login-form " >
            <div className="form-box solid">
                <form onSubmit={handleSubmit}>
                    <h1 className="login-text">Register</h1>
                    <label>Username</label>
                    <input type="text" name="username" className="login-box text-white" 
                        placeholder={placeholderUserName} value={userName}
                        onChange={(e) => setUserName(e.target.value)}/>
                    <br></br>
                    <label>First Name</label>
                    <input type="text" name="firstname" className="login-box text-white" 
                        placeholder={placeholderFirstName} value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}/>
                    <br></br>
                    <label>Last Name</label>
                    <input type="text" name="lastname" className="login-box text-white" 
                        placeholder={placeholderLastName} value={lastName}
                        onChange={(e) => setLastName(e.target.value)}/>
                    <br></br>
                    <label>Password</label>
                    <input type="password" name="password" className="login-box text-white" 
                        placeholder={placeholderPassword} value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <br></br>
                    <input type="submit"value="REGISTER" className="login-btn" />
                    
                </form>
                <div className="message text-white font-bold ">{message ? <p>{message}</p> : null}</div>
            </div>
        </div>
      </div>
    );
  };
  export default Register;