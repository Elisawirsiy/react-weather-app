import React, { useState } from "react";
import axios from "axios";
import WeatherConditions from "./WeatherConditions";
import WeatherForecast from "./WeatherForecast";

import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [city, setCity] = useState("");

  const [weatherData, setWeatherData] = useState({ ready: false });

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = `3a6fe3259445cfb2e45add19395f004f`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function searchLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiKey = `3a6fe3259445cfb2e45add19395f004f`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemperature);
  }
  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6 me-3 p-0">
          <input
            type="text"
            placeholder="Enter a city..."
            className="form-control search-input"
            autoFocus
            onChange={updateCity}
          />
        </div>
        <div className="col-3 ms-5">
          <input className="btn" type="submit" value="Search" />
        </div>
        <div className="col me-1 p-0">
          <button className="float-left btn" onClick={getLocation}>
            <i class="fas fa-street-view"></i>
          </button>
        </div>
      </div>
    </form>
  );
  if (weatherData.ready) {
    return (
      <div className="SearchBar">
        <br />
        {form}
        <br />
        <WeatherConditions data={weatherData} />
        <br />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    return form;
  }
}
