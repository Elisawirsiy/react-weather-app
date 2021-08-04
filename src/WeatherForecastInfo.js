import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastInfo(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);

    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);

    return `${temperature}°`;
  }

  return (
    <div className="WeatherForecastInfo">
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={30} />
      <div className="forecast-temp">
        <span className="forecast-max">{maxTemp()}</span>
        <span className="forecast-min">{minTemp()}</span>
      </div>
    </div>
  );
}
