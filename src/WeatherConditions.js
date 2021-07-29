import React from "react";
import DateTime from "./DateTime";
import WeatherUnits from "./WeatherUnits";
import WeatherIcon from "./WeatherIcon";

export default function WeatherConditions(props) {
  return (
    <div className="WeatherConditions">
      <div className="row">
        <div className="col-12">
          <h2>
            {props.weather.city}, {props.weather.country}
          </h2>
          <DateTime />
          <div className="text-capitalize">{props.weather.description}</div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="clearfix d-flex">
              <div className="float-left weather-icon">
                <WeatherIcon code={props.weather.icon} />
              </div>
              <div className="float-left">
                <WeatherUnits celsius={props.weather.temperature} />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Humidity: {props.weather.humidity} %</li>
              <li>Wind speed: {Math.round(props.weather.wind)} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
