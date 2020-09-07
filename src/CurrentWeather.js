import React from "react";
import "./App.css";
import FormatDate from "./FormatDate";
import UnitConversion from "./UnitConversion";

export default function CurrentWeather(props) {
  return (
    <div className="Current">
      <div className="row">
        <div className="col currentInfo">
          <div className="col currentCity" id="current-city">
            {props.info.city}
          </div>
          <div className="col">
            <img src={props.info.iconUrl} alt="🌤" id="weather-icon" />
          </div>
        </div>

        <div className="col currentDayTemp">
          <div className="col" id="updated">
            Last updated:
          </div>
          <div className="col" id="current-day">
            <FormatDate date={props.info.date} />
          </div>
          <UnitConversion fahrenheit={props.info.temperature} />
        </div>

        <div className="col weather">
          <div className="col emojiDescription" id="emoji-description">
            {props.info.description}
          </div>
          <div className="col highLowMajor">
            <strong>
              <span id="high-major">{props.info.high}</span>°
            </strong>
            /<span id="low-major">{props.info.low}</span>°
          </div>
          <div className="col humidityWind">
            <ul className="col">
              <li id="humidity">
                Humidity: <span id="percent">{props.info.humidity}</span>%
              </li>
              <li id="wind">
                Wind: <span id="speed">{props.info.wind}</span>
                <span id="speed-unit"> mph</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
