import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/reviews.png";
import SideNav from "./Navbar";
import { UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <a href="/" style={logoContainerStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
      </a>
      <div style={navContainerStyle}>
        <div style={searchBarStyle}>
          <FontAwesomeIcon icon={faSearch} size="xl" /> {/* Font Awesome Search Icon */}
          {/* Your search bar implementation here */}
        </div>
        <a href="/AllCourses" style={linkStyle}>All Courses</a>
        <UserButton  />
        <SideNav />{/* Font Awesome Burger Icon */}
        {/* Your navigation burger icon implementation here */}
      </div>
    </header>
  );
};


const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  background: "#f0ffff",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  zIndex: "100",
};

const logoContainerStyle = {
  flex: "0",
  margin: "15px",
};

const logoStyle = {
  height: "50px",
};

const searchBarStyle = {
  margin: "10px",
};

const linkStyle = {
  color: "black",
  textDecoration: "none",
  margin: "30px",
};

const navContainerStyle = {
  display: "flex",
  alignItems: "center",
};

export default Header;
