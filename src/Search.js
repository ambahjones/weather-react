import React, { useState } from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";
import Forecast from "./Forecast";

export default function Search(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [units, setUnits] = useState("imperial");

  function handleResponse(response) {
    setWeatherInfo({
      ready: true,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  function searchForCity() {
    const apiKey = "093e071e943ff87f9fc6c8107074ad0a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchForCity();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function displayCurrent(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const apiKey = "093e071e943ff87f9fc6c8107074ad0a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(<Forecast city={weatherInfo.city} units={units} />);
  }

  function getCurrent() {
    navigator.geolocation.getCurrentPosition(displayCurrent);
  }

  if (weatherInfo.ready) {
    return (
      <div>
        <form className="citySearch" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="City to Search"
            className="searchBar"
            id="city-to-search"
            autoFocus="on"
            onChange={changeCity}
          />
          <input
            type="submit"
            value="Search"
            className="searchButton"
            id="search"
          />
          <input
            type="submit"
            value="Current"
            className="currentButton"
            id="current"
            onClick={getCurrent}
          />
        </form>

        <CurrentWeather info={weatherInfo} units={units} setUnits={setUnits} />
        <Forecast city={weatherInfo.city} units={units} />
      </div>
    );
  } else {
    searchForCity();

    return "Loading...";
  }
}
