import React, { useState } from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function Search() {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherInfo({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  if (weatherInfo.ready) {
    return (
      <div>
        <form className="citySearch">
          <input
            type="text"
            placeholder="City to Search"
            className="searchBar"
            id="city-to-search"
            autofocus="on"
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
          />
        </form>

        <div className="Current">
          <div className="row">
            <div className="currentInfo">
              <div className="col currentCity" id="current-city">
                {weatherInfo.city}
              </div>
              <div className="col">
                <img src="" alt="🌤" id="weather-icon" />
              </div>
            </div>

            <div className="currentDayTemp">
              <div className="col" id="updated">
                Last updated:
              </div>
              <div className="col" id="current-day">
                <FormatDate date={weatherInfo.date} />
              </div>
              <div className="col">
                <span className="temp" id="current-temp">
                  {weatherInfo.temperature}
                </span>
                <span id="degree">°</span>
                <span className="unit" id="unit-f">
                  F
                </span>
                <span className="unitSlash">|</span>
                <span className="unit" id="unit-c">
                  C
                </span>
              </div>
            </div>

            <div className="col weather">
              <div className="col emojiDescription" id="emoji-description">
                {weatherInfo.description}
              </div>
              <div className="col highLowMajor">
                <strong>
                  <span id="high-major">{weatherInfo.high}</span>°
                </strong>
                /<span id="low-major">{weatherInfo.low}</span>°
              </div>
              <div className="col humidity wind">
                <ul>
                  <li id="humidity">
                    Humidity: <span id="percent">{weatherInfo.humidity}</span>%
                  </li>
                  <li id="wind">
                    Wind: <span id="speed">{weatherInfo.wind}</span>
                    <span id="speed-unit"> mph</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <CurrentWeather />
      </div>
    );
  } else {
    const apiKey = "093e071e943ff87f9fc6c8107074ad0a";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
