import React from "react";
import "./RightSection.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import WeatherDetail from "./WeatherDetail";

const RightSection = ({ weatherData, hourlyData }) => {
  return (
    <>
      <div class="right-section">
        <header>
          <h2>Welcome to SkyCast</h2>
          <p>Check out your area's weather information</p>
        </header>

        <div class="upcoming-hours">
          <h3>Upcoming hours</h3>
          {/* <!-- Example of a small line chart or data row --> */}
          <div class="chart-placeholder">
            {hourlyData.map((hour, index) => (
              <div key={index} className="forecast-item">
                <p>{hour.time}</p>
                <img src={hour.icon} alt="weather" />
                <p>{hour.temp}°</p>
                <p>{hour.rain}%</p>
              </div>
            ))}
          </div>
          {/* Recharts Graph */}
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={hourlyData}>
              <XAxis dataKey="time" tick={{ fontSize: 12 }} />
              <YAxis hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="rain"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div class="weather-details">
          <h3>More details of Today's weather</h3>
          <div class="details-grid">
            <WeatherDetail
              title="Humidity"
              value={`${weatherData.humidity}%`}
            ></WeatherDetail>
            <WeatherDetail
              title="Wind"
              value={`${weatherData.windSpeed} km/h`}
            ></WeatherDetail>
            <WeatherDetail
              title="Sea Level"
              value={weatherData.seaLevel}
            ></WeatherDetail>
            <WeatherDetail
              title="Visibility"
              value={`${weatherData.visibility / 1000} km`}
            ></WeatherDetail>
            <WeatherDetail
              title="Pressure"
              value={`${weatherData.pressure} mb`}
            ></WeatherDetail>
            <WeatherDetail
              title="Ground Level"
              value={weatherData.groundLevel}
            ></WeatherDetail>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSection;
