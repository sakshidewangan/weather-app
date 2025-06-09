import React from "react";

const WeatherDetail = ({ title, value }) => {
  return (
    <div className="detail-card">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
};

export default WeatherDetail;
