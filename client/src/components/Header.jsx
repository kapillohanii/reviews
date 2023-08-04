import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/reviews.png";
import SideNav from "./Navbar";

const Header = () => {
  return (
    <header style={headerStyle}>
      <a href="/" style={logoContainerStyle}>
        <img src={logo} alt="Logo" style={logoStyle}  />
      </a>
      <div style={navContainerStyle}>
        <div style={searchBarStyle}>
          <FontAwesomeIcon icon={faSearch} size="xl"/> {/* Font Awesome Search Icon */}
          {/* Your search bar implementation here */}
        </div>
        <a style={{color:"black"}}href="/AllCourses">All Courses</a>
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
};

const logoContainerStyle = {
  flex: "0",
  margin: "15px"
};

const logoStyle = {
  height: "50px", 
};

const searchBarStyle = {
    margin: "10px",
};

const navContainerStyle = {
  display: "flex",
  alignItems: "center",
};


export default Header;

