import React from "react";
import "./App.css";

export default function ForecastPreview(props) {
  let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = [
      "12",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];
    let hour = hours[date.getHours()];
    return `${hour}:00`;
  }

  function temperature() {
    if (props.units === "imperial") {
      let temperature = Math.round(props.data.main.temp);
      return `${temperature}°F`;
    } else {
      let temperature = Math.round(((props.data.main.temp - 32) * 5) / 9);
      return `${temperature}°C`;
    }
  }

  return (
    <div className="row forecast">
      <div className="col text-center">
        <ul className="col forecastItem">
          <li className="forcastTime">{hours()}</li>
          <li className="forecastIcon">
            <img src={iconUrl} alt="" />
          </li>
          <li className="forecastTemp">{temperature()}</li>
        </ul>
      </div>
    </div>
  );
}
