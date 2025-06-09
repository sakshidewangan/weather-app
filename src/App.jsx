import React from "react";
import UseApi from "./components/UseApi";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import "./App.css";

const App = () => {
  return (
    <div class="weather-container">
      <UseApi>
        {/* Left section */}
        <LeftSection></LeftSection>

        {/* <!-- Right section --> */}
        <RightSection></RightSection>
      </UseApi>
    </div>
  );
};

export default App;
