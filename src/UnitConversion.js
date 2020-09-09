import React from "react";
import "./App.css";
import FormatDate from "./FormatDate";

export default function UnitConversion(props) {
  let city = props.city;
  let icon = props.icon;
  let temperature = props.fahrenheit;
  let description = props.description;
  let high = props.high;
  let low = props.low;
  let humidity = props.humidity;
  let wind = props.wind;

  function showCelcius(event) {
    props.setUnits("celcius");
  }

  function showFahrenheit(event) {
    props.setUnits("imperial");
  }

  if (props.units === "imperial") {
    return (
      <div className="row">
        <div className="col currentInfo">
          <div className="col currentCity" id="current-city">
            {city}
          </div>
          <div className="col">
            <img src={icon} alt="🌤" id="weather-icon" />
          </div>
        </div>

        <div className="col currentDayTemp">
          <div className="col" id="updated">
            Last updated:
          </div>
          <div className="col" id="current-day">
            <FormatDate date={props.date} />
          </div>
          <div className="col">
            <span className="temp" id="current-temp">
              {temperature}
            </span>
            <span id="degree">°</span>
            <span className="unit" id="unit-f">
              F
            </span>
            <span className="unitSlash">|</span>
            <span className="unit" id="unit-c" onClick={showCelcius}>
              C
            </span>
          </div>
        </div>

        <div className="col weather">
          <div className="col emojiDescription" id="emoji-description">
            {description}
          </div>
          <div className="col highLowMajor">
            <strong>
              <span id="high-major">{high}</span>°
            </strong>
            /<span id="low-major">{low}</span>°
          </div>
          <div className="col humidityWind">
            <ul className="col">
              <li id="humidity">
                Humidity: <span id="percent">{humidity}</span>%
              </li>
              <li id="wind">
                Wind: <span id="speed">{wind}</span>
                <span id="speed-unit"> mph</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col currentInfo">
          <div className="col currentCity" id="current-city">
            {city}
          </div>
          <div className="col">
            <img src={icon} alt="🌤" id="weather-icon" />
          </div>
        </div>

        <div className="col currentDayTemp">
          <div className="col" id="updated">
            Last updated:
          </div>
          <div className="col" id="current-day">
            <FormatDate date={props.date} />
          </div>
          <span className="temp" id="current-temp">
            {Math.round(((temperature - 32) * 5) / 9)}
          </span>
          <span id="degree">°</span>
          <span className="unit" id="unit-f" onClick={showFahrenheit}>
            F
          </span>
          <span className="unitSlash">|</span>
          <span className="unit" id="unit-c">
            C
          </span>
        </div>

        <div className="col weather">
          <div className="col emojiDescription" id="emoji-description">
            {description}
          </div>
          <div className="col highLowMajor">
            <strong>
              <span id="high-major">{Math.round(((high - 32) * 5) / 9)}</span>°
            </strong>
            /<span id="low-major">{Math.round(((low - 32) * 5) / 9)}</span>°
          </div>
          <div className="col humidityWind">
            <ul className="col">
              <li id="humidity">
                Humidity: <span id="percent">{humidity}</span>%
              </li>
              <li id="wind">
                Wind: <span id="speed">{Math.round(wind * 1.609)}</span>
                <span id="speed-unit"> kph</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
