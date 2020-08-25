import React from "react";
import "./App.css";

export default function Current() {
  return (
    <div className="Current">
      <div className="row" id="current-info">
        <div className="cityEmoji">
          <div className="col currentCity" id="current-city">
            Philadelphia
          </div>
          <div className="col currentEmoji">
            <img src="" alt="🌤" id="weather-icon" />
          </div>
        </div>

        <div className="currentDayTemp">
          <div className="col" id="updated">
            Last updated:
          </div>
          <div className="col currentDay" id="current-day">
            Saturday, 1:41
          </div>
          <div className="col currentTemp">
            <span className="temp" id="temperature">
              80
            </span>
            °
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
            Partly Cloudy
          </div>
          <div className="col highLowMajor">
            <strong>
              <span id="high-major">85</span>°
            </strong>
            /<span id="low-major">70</span>°
          </div>
          <div className="col humidity wind">
            <ul>
              <li id="humidity">
                Humidity: <span id="percent">0</span>%
              </li>
              <li id="wind">
                Wind: <span id="speed">0</span>
                <span id="speed-unit">mph</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
