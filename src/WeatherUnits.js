import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherUnits">
        <span className=" main-temp">{Math.round(props.celsius)}</span>
        <span className="temp-units">
          °C|
          <a href="/" className="text-decoration-none" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32; //this can also be as a function on its own
    return (
      <div className="WeatherUnits">
        <span className=" main-temp">{Math.round(fahrenheit)}</span>
        <span className="temp-units">
          <a href="/" className="text-decoration-none" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
