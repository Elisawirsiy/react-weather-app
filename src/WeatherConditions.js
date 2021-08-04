import React from "react";
import DateTime from "./DateTime";
import WeatherUnits from "./WeatherUnits";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function WeatherConditions(props) {
  return (
    <div className="WeatherConditions">
      <div className="row">
        <div className="col-12">
          <h2>
            {props.data.city}, {props.data.country}
          </h2>
          <DateTime date={props.data.date} />
          <div className="text-capitalize text-muted">
            {props.data.description}
          </div>
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
          <div className="col-sm-6 text-muted">
            <ul>
              <li>
                Humidity:{" "}
                <span className="parameters">{props.data.humidity} %</span>{" "}
              </li>
              <li>
                Wind speed:{" "}
                <span className="parameters">
                  {Math.round(props.data.wind)} m/s
                </span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
