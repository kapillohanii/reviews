import React from "react";
import Header from "../components/Header";
// import { useHistory } from "react-router-dom"; // Import useHistory hook for navigation

const SubjectsPage = () => {

  const handleSubjectClick = (subject) => {
    // Handle the click event for each subject button
    console.log(`Selected Subject: ${subject}`);
    // Add your logic or navigation code here for each subject
  };

  return (
    <><Header />
    <div style={containerStyle}>
      <div style={buttonsContainerStyle}>
        <div style={columnStyle}>
          <button onClick={() => handleSubjectClick("English")} style={buttonStyle}>
            English
          </button>
          <button onClick={() => handleSubjectClick("Maths")} style={buttonStyle}>
            Maths
          </button>
        </div>
        <div style={columnStyle}>
          <button onClick={() => handleSubjectClick("Science")} style={buttonStyle}>
            Science
          </button>
          <button onClick={() => handleSubjectClick("History")} style={buttonStyle}>
            History
          </button>
        </div>
        <div style={columnStyle}>
          <button onClick={() => handleSubjectClick("Geography")} style={buttonStyle}>
            Geography
          </button>
          <button onClick={() => handleSubjectClick("Art")} style={buttonStyle}>
            Art
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

const containerStyle = {
  padding: "20px",
};


const buttonsContainerStyle = {
  display: "flex",
};

const columnStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const buttonStyle = {
  margin: "10px",
  padding: "16px 32px",
  background: "#fff",
  color: "#007bff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "18px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add a shadow effect
};

export default SubjectsPage;
