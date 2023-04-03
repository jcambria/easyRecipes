import React from "react";

function SignInButton({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };
  return (
    
      
      <span onClick={handleClick} className="loginicon">
          Login
        </span>
      
    
  );
}

export default SignInButton;