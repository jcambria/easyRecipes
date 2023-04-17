import React from "react";

function RegisterButton({ handleRegisterClick }) {
  const handleClick = () => {
    handleRegisterClick();
  };
  return (
    
    
      <span onClick={handleClick} className="loginicon">
          Register
        </span>
      
    
  );
}

export default RegisterButton;