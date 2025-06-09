// import React, { useState, useEffect } from "react";
// import clear_icon from "../assets/clear.png";
// import cloud_icon from "../assets/cloud.png";
// import drizzle_icon from "../assets/drizzle.png";
// import humidity_icon from "../assets/humidity.png";
// import snow_icon from "../assets/snow.png";
// import wind_icon from "../assets/wind.png";
// import rain_icon from "../assets/rain.png";
// import { fetchBg } from "../utils/fetchBg";

// const UseApi = ({ children }) => {
//   const api = "ac292fb000dad3733be375a06701cb59";

//   const [weatherData, setWeatherData] = useState(false);
//   const [backgroundImage, setBackgroundImage] = useState(
//     "/assests/WhatsApp Image 2025-02-01 at 14.43.09_92763263.jpg"
//   );
//   const [hourlyData, setHourlyData] = useState([]);

//   const allIcons = {
//     "01d": clear_icon,
//     "01n": clear_icon,
//     "02d": cloud_icon,
//     "02n": cloud_icon,
//     "03d": cloud_icon,
//     "03n": cloud_icon,
//     "04d": drizzle_icon,
//     "04n": drizzle_icon,
//     "09d": rain_icon,
//     "09n": rain_icon,
//     "10d": rain_icon,
//     "10n": rain_icon,
//     "13d": snow_icon,
//     "13n": snow_icon,
//   };

//   const formatTime = (timestamp) => {
//     const date = new Date(timestamp * 1000); // Convert to milliseconds
//     return date.toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: false,
//     });
//   };

//   const search = async (city) => {
//     if (city === "") {
//       alert("Enter City Name");
//       return;
//     }
//     try {
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`;
//       const response = await fetch(url);
//       const data = await response.json();

//       if (!response.ok) {
//         alert(data.message);
//       }

//       console.log(data);
//       const icon = allIcons[data.weather[0].icon] || clear_icon;

//       setWeatherData({
//         humidity: data.main.humidity,
//         windSpeed: data.wind.speed,
//         temperature: Math.floor(data.main.temp),
//         location: data.name,
//         icon: icon,
//         sunrise: formatTime(data.sys.sunrise),
//         sunset: formatTime(data.sys.sunset),
//         temp_max: data.main.temp_max,
//         temp_min: data.main.temp_min,
//         feels_like: data.main.feels_like,
//         visibility: data.visibility,
//         country: data.sys.country,
//         name: data.weather[0].main,
//         pressure: data.main.pressure,
//         seaLevel: data.main.sea_level,
//         groundLevel: data.main.grnd_level,
//       });

//       fetchHourlyForecast(data.coord.lat, data.coord.lon);
//     } catch (error) {
//       setWeatherData(false);
//       // console.log("error in fetching weather data.");
//     }
//   };

//   const fetchHourlyForecast = async (lat, lon) => {
//     try {
//       // const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`;
//       const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api}`;

//       const response = await fetch(url);
//       const data = await response.json();

//       if (!response.ok) {
//         console.error("Error fetching hourly forecast");
//         return;
//       }

//       console.log(data);
//       const filteredData = data.list.slice(0, 7).map((item) => ({
//         time: new Date(item.dt * 1000).toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//         temp: Math.floor(item.main.temp),
//         rain: Math.round((item.pop || 0) * 100), // Probability of precipitation in percentage
//         icon: allIcons[item.weather[0].icon] || clear_icon,
//       }));

//       setHourlyData(filteredData);
//     } catch (error) {
//       console.error("Error fetching hourly forecast:", error);
//     }
//   };

//   useEffect(() => {
//     search("New Delhi");
//   }, []);

//   return (
//     <>
//       {React.Children.map(children, (child) =>
//         React.cloneElement(child, { weatherData, hourlyData, search })
//       )}
//     </>
//   );
// };

// export default UseApi;

import React, { useState, useEffect } from "react";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import rain_icon from "../assets/rain.png";
import { fetchBg } from "../utils/fetchBg";
import defaultImage from "../assets/default.jpg";

const UseApi = ({ children }) => {
  const api = "ac292fb000dad3733be375a06701cb59";

  const [weatherData, setWeatherData] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(defaultImage);
  const [hourlyData, setHourlyData] = useState([]);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      const weatherType = data.weather[0].main;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
        sunrise: formatTime(data.sys.sunrise),
        sunset: formatTime(data.sys.sunset),
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        feels_like: data.main.feels_like,
        visibility: data.visibility,
        country: data.sys.country,
        name: weatherType,
        pressure: data.main.pressure,
        seaLevel: data.main.sea_level,
        groundLevel: data.main.grnd_level,
      });

      const imageUrl = await fetchBg(city, weatherType);
      setBackgroundImage(
        imageUrl ||
          require("../assets/WhatsApp Image 2025-02-01 at 14.43.09_92763263.jpg")
      );

      fetchHourlyForecast(data.coord.lat, data.coord.lon);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(false);
      setBackgroundImage(
        require("../assets/WhatsApp Image 2025-02-01 at 14.43.09_92763263.jpg")
      );
    }
  };

  const fetchHourlyForecast = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api}`;
      const response = await fetch(url);
      const data = await response.json();

      const filteredData = data.list.slice(0, 7).map((item) => ({
        time: new Date(item.dt * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        temp: Math.floor(item.main.temp),
        rain: Math.round((item.pop || 0) * 100),
        icon: allIcons[item.weather[0].icon] || clear_icon,
      }));

      setHourlyData(filteredData);
    } catch (error) {
      console.error("Error fetching hourly forecast:", error);
    }
  };

  useEffect(() => {
    search("New Delhi");
  }, []);

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          weatherData,
          hourlyData,
          search,
          backgroundImage,
        })
      )}
    </>
  );
};

export default UseApi;
