// import React, { useState } from "react";
// import "./ToggleButton.css";

// const ToggleButton = () => {
//   const [toggle, setToggle] = useState(false);

//   const handleClick = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <div className="container">
//       <span className="text">°C</span>
//       <div className="toggle-button" onClick={handleClick}>
//         <div className={`switch ${toggle ? "°C" : "F"}`}></div>
//       </div>
//       <span className="text">°F</span>
//     </div>
//   );
// };

// export default ToggleButton;

// ToggleButton.js
// ToggleButton.js

import React from "react";

const ToggleButton = ({ isCelsius, setIsCelsius }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginLeft: "10px",
      }}
    >
      <span style={{ fontWeight: isCelsius ? "bold" : "normal" }}>°C</span>
      <div
        onClick={() => setIsCelsius(!isCelsius)}
        style={{
          width: "50px",
          height: "25px",
          backgroundColor: "#90CAF9",
          borderRadius: "25px",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "21px",
            height: "21px",
            backgroundColor: "white",
            borderRadius: "50%",
            position: "absolute",
            top: "2px",
            left: isCelsius ? "2px" : "27px",
            transition: "left 0.3s",
          }}
        ></div>
      </div>
      <span style={{ fontWeight: !isCelsius ? "bold" : "normal" }}>°F</span>
    </div>
  );
};

export default ToggleButton;
