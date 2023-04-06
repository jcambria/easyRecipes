import React from "react";

function LogoutButton({ handleLogoutClick, user }) {
  const handleClick = () => {
    handleLogoutClick();
  };
  return (
    <span onClick={handleClick} className="loginicon">
      {user.userName} Logout
    </span>
  );
}

export default LogoutButton;
