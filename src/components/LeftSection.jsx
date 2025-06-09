// import React from "react";
// import { useRef } from "react";
// import ToggleButton from "./ToggleButton";
// import "./LeftSection.css";
// import { BsSunriseFill } from "react-icons/bs";
// import { GiSunset } from "react-icons/gi";
// import search_icon from "../assets/gps (1).png";
// import LiveTime from "./LiveTime";
// import LiveDate from "./LiveDate";

// const LeftSection = ({ weatherData, search }) => {
//   const inputRef = useRef();

//   return (
//     <>
//       <div class="left-section">
//         <div class="overlay"></div>
//         <div class="left-content">
//           <div className="top-ele">
//             <div className="add-city">
//               <input
//                 ref={inputRef}
//                 type="text"
//                 placeholder="search city"
//                 className="search-input"
//               ></input>
//               <button
//                 className="search-icon "
//                 onClick={() => {
//                   search(inputRef.current.value);
//                   inputRef.current.value = "";
//                 }}
//               >
//                 <img src={search_icon} alt="" />
//               </button>
//             </div>
//             <ToggleButton></ToggleButton>
//           </div>
//           <div class="top-bar">
//             <div class="location-day">
//               <h2>
//                 {weatherData.location}/{weatherData.country}
//               </h2>
//               <p>
//                 <LiveDate />
//               </p>
//             </div>
//             <div className="sun">
//               <p>
//                 <BsSunriseFill /> {weatherData.sunrise}
//               </p>
//               <p>
//                 <GiSunset /> {weatherData.sunset}
//               </p>
//             </div>
//           </div>

//           <div class="main-info">
//             <h1>{weatherData.temperature}°</h1>
//             <div>
//               <img src={weatherData.icon} alt=""></img>
//               <span>{weatherData.name}</span>
//             </div>

//             <p>
//               {weatherData.temp_max}°C/{weatherData.temp_min}°C{" "}
//               <span>Feels like {weatherData.feels_like}°C</span>
//             </p>
//           </div>
//           <LiveTime />
//         </div>
//       </div>
//     </>
//   );
// };

// export default LeftSection;

// import React, { useRef, useState } from "react";
// import "./LeftSection.css";
// import { BsSunriseFill } from "react-icons/bs";
// import { GiSunset } from "react-icons/gi";
// import search_icon from "../assets/gps (1).png";
// import LiveTime from "./LiveTime";
// import LiveDate from "./LiveDate";
// import ToggleButton from "./ToggleButton";

// const LeftSection = ({ weatherData, search }) => {
//   const inputRef = useRef();
//   const [isCelsius, setIsCelsius] = useState(true);

//   const convertToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

//   const formatTemp = (temp) => {
//     if (temp === undefined) return "--";
//     return isCelsius
//       ? `${Math.round(temp)}°C`
//       : `${convertToFahrenheit(temp).toFixed(1)}°F`;
//   };

//   return (
//     <>
//       <div className="left-section">
//         <div className="overlay"></div>
//         <div className="left-content">
//           <div className="top-ele">
//             <div className="add-city">
//               <input
//                 ref={inputRef}
//                 type="text"
//                 placeholder="search city"
//                 className="search-input"
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     search(inputRef.current.value);
//                     inputRef.current.value = "";
//                   }
//                 }}
//               />
//               <button
//                 className="search-icon"
//                 onClick={() => {
//                   search(inputRef.current.value);
//                   inputRef.current.value = "";
//                 }}
//               >
//                 <img src={search_icon} alt="" />
//               </button>
//             </div>

//             {/* Toggle Button UI */}
//             <ToggleButton isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
//           </div>

//           <div className="top-bar">
//             <div className="location-day">
//               <h2>
//                 {weatherData.location}/{weatherData.country}
//               </h2>
//               <p>
//                 <LiveDate />
//               </p>
//             </div>
//             <div className="sun">
//               <p>
//                 <BsSunriseFill /> {weatherData.sunrise}
//               </p>
//               <p>
//                 <GiSunset /> {weatherData.sunset}
//               </p>
//             </div>
//           </div>

//           <div className="main-info">
//             <h1>{formatTemp(weatherData.temperature)}</h1>
//             <div>
//               <img src={weatherData.icon} alt="" />
//               <span>{weatherData.name}</span>
//             </div>
//             <p>
//               {formatTemp(weatherData.temp_max)}/
//               {formatTemp(weatherData.temp_min)}{" "}
//               <span>Feels like {formatTemp(weatherData.feels_like)}</span>
//             </p>
//           </div>
//           <LiveTime />
//         </div>
//       </div>
//     </>
//   );
// };

// export default LeftSection;

import React, { useRef, useState } from "react";
import "./LeftSection.css";
import { BsSunriseFill } from "react-icons/bs";
import { GiSunset } from "react-icons/gi";
import search_icon from "../assets/gps (1).png";
import LiveTime from "./LiveTime";
import LiveDate from "./LiveDate";
import ToggleButton from "./ToggleButton";

const LeftSection = ({ weatherData, search, backgroundImage }) => {
  const inputRef = useRef();
  const [isCelsius, setIsCelsius] = useState(true);

  const convertToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  const formatTemp = (temp) => {
    if (temp === undefined) return "--";
    return isCelsius
      ? `${Math.round(temp)}°C`
      : `${convertToFahrenheit(temp).toFixed(1)}°F`;
  };

  return (
    <div
      className="left-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <div className="left-content">
        <div className="top-ele">
          <div className="add-city">
            <input
              ref={inputRef}
              type="text"
              placeholder="search city"
              className="search-input"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  search(inputRef.current.value);
                  inputRef.current.value = "";
                }
              }}
            />
            <button
              className="search-icon"
              onClick={() => {
                search(inputRef.current.value);
                inputRef.current.value = "";
              }}
            >
              <img src={search_icon} alt="search" />
            </button>
          </div>

          <ToggleButton isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
        </div>

        <div className="top-bar">
          <div className="location-day">
            <h2>
              {weatherData.location}/{weatherData.country}
            </h2>
            <p>
              <LiveDate />
            </p>
          </div>
          <div className="sun">
            <p>
              <BsSunriseFill /> {weatherData.sunrise}
            </p>
            <p>
              <GiSunset /> {weatherData.sunset}
            </p>
          </div>
        </div>

        <div className="main-info">
          <h1>{formatTemp(weatherData.temperature)}</h1>
          <div>
            <img src={weatherData.icon} alt="icon" />
            <span>{weatherData.name}</span>
          </div>
          <p>
            {formatTemp(weatherData.temp_max)} /{" "}
            {formatTemp(weatherData.temp_min)}
            <span> Feels like {formatTemp(weatherData.feels_like)}</span>
          </p>
        </div>
        <LiveTime />
      </div>
    </div>
  );
};

export default LeftSection;
