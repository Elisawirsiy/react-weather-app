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
            {props.data.city}, {props.data.country}
          </h2>
          <DateTime date={props.data.date} />
          <div className="text-capitalize">{props.data.description}</div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="clearfix d-flex">
              <div className="float-left weather-icon">
                <WeatherIcon code={props.data.icon} size={52} />
              </div>
              <div className="float-left">
                <WeatherUnits celsius={props.data.temperature} />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind speed: {Math.round(props.data.wind)} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
