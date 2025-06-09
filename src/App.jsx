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
        paddingTop: "40px",
        paddingBottom: "40px",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
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
