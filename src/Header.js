import React from "react";

const headerStyle = {
  backgroundColor: "red"
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Welcome To Sandras Profile Page</h1>
      <nav>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#fav-foods">Favourite Foods</a>
          </li>
          <li>
            <a href="#contact">Contact Details</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
