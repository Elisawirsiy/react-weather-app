import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  let [temperature, setTemperature] = useState("");

  function showTemperature(response) {
    setMessage(true);
    setTemperature({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `3a6fe3259445cfb2e45add19395f004f`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
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
      <input type="submit" value="Search" />
    </form>
  );
  if (message) {
    return (
      <div className="SearchBar">
        {" "}
        {form}
        <ul>
          <h2>{city}</h2>
          <li>Temperature: {Math.round(temperature.temperature)}℃</li>
          <li>Humidity: {temperature.humidity}% </li>
          <li>Wind: {Math.round(temperature.wind)} m/s </li>
          <li>Description: {temperature.description} </li>
          <li>
            <img src={temperature.icon} alt="icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
