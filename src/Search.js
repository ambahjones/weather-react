import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Current from "./Current";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function showWeather(response) {
    setWeather(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "093e071e943ff87f9fc6c8107074ad0a";
    let unit = "imperial";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(showWeather);
  }

  function enteredCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="City to Search"
          className="searchBar"
          id="city-to-search"
          autofocus="on"
          onSubmit={handleSubmit}
        />
        <input
          type="submit"
          value="Search"
          className="searchButton"
          id="search"
          onChange={enteredCity}
        />
        <input
          type="submit"
          value="Current"
          className="currentButton"
          id="current"
        />
      </form>
      <Current weather={weather} />
    </div>
  );
}
