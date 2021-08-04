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
      <input
        type="text"
        placeholder="Enter a city..."
        autoFocus
        onChange={updateCity}
      />
      <input className="btn btn-primary" type="submit" value="Search" />
      <button className="float-left btn btn-success" onClick={getLocation}>
        <i className="fas fa-map-marker-alt"></i>
      </button>
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
