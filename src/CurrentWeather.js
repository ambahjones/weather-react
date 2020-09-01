import React from "react";
import "./App.css";
import FormatDate from "./FormatDate";

export default function CurrentWeather(props) {
  return (
    <div className="Current">
      <div className="row">
        <div className="currentInfo">
          <div className="col currentCity" id="current-city">
            {props.info.city}
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
            <FormatDate date={props.info.date} />
          </div>
          <div className="col">
            <span className="temp" id="current-temp">
              {props.info.temperature}
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
            {props.info.description}
          </div>
          <div className="col highLowMajor">
            <strong>
              <span id="high-major">{props.info.high}</span>°
            </strong>
            /<span id="low-major">{props.info.low}</span>°
          </div>
          <div className="col humidity wind">
            <ul>
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
