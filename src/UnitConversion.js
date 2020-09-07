import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");
  let temperature = props.fahrenheit;

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
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
    );
  } else {
    return (
      <div className="col">
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
    );
  }
}
