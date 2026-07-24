import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let page;
  let button;

  if (isLoggedIn) {
    page = <UserPage />;
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    page = <GuestPage />;
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
      {page}
      {button}
    </div>
  );
}

export default App;
