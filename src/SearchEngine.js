import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [temperature, setTemperature] = useState("");

  function showTemperature(response) {
    setMessage(true);
    setTemperature({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = `3a6fe3259445cfb2e45add19395f004f`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function searchLocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = `3a6fe3259445cfb2e45add19395f004f`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
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
      <input className="btn-primary" type="submit" value="Search" />
      <button className="btn-success" onClick={getLocation}>
        Current
      </button>
    </form>
  );
  if (message) {
    return (
      <div className="SearchBar">
        {" "}
        {form}
        <div className="weather">
          <h2 className="centered">
            {temperature.city}, {temperature.country}
          </h2>
          <div>{temperature.description} </div>
          <h2>{Math.round(temperature.temperature)}℃</h2>
          <div>Humidity: {temperature.humidity}% </div>
          <div>Wind: {Math.round(temperature.wind)} m/s </div>

          <div>
            <img src={temperature.icon} alt="icon" />
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
