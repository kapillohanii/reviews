import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prevShowNav) => !prevShowNav);
  };

  return (
    <div>
      <button onClick={toggleNav} style={burgerButtonStyle}>
        {showNav ? (
          <FontAwesomeIcon icon={faBarsStaggered} size="xl" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="xl" />
        )}
      </button>
      <div
        style={{
          ...sideNavStyle,
          transform: showNav ? "translateX(0)" : "translateX(100%)",
          display: "flex",
          flexDirection:"column",
        }}
      >
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
        <button>log out</button>
      </div>
    </div>
  );
};

const sideNavStyle = {
  position: "fixed",
  top: 100,
  right: 0, // Set the right position
  width: "200px",
  height: "100%",
  background: "#f0f0f0",
  padding: "20px",
  transition: "transform 0.3s ease-in-out",
};

const burgerButtonStyle = {
  padding: "8px 16px",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
};

export default SideNav;
