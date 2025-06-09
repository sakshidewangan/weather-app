import React from "react";
import UseApi from "./components/UseApi";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import bgImage from "/assets/bg.png"; // adjust path if needed
import "./App.css";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="weather-container">
        <UseApi>
          <LeftSection />
          <RightSection />
        </UseApi>
      </div>
    </div>
  );
};

export default App;
