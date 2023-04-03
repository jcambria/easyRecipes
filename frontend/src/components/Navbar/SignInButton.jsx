import React from "react";

function SignInButton({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };
  return (
    <div className="navbar">
      <div>
        <button onClick={handleClick} className="loginicon">button</button> 
      </div>
    </div>
  );
}

export default SignInButton;