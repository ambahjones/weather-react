import React from "react";
import "./App.css";
import UnitConversion from "./UnitConversion";

export default function CurrentWeather(props) {
  return (
    <div className="Current">
      <UnitConversion
        city={props.info.city}
        icon={props.info.iconUrl}
        date={props.info.date}
        fahrenheit={props.info.temperature}
        description={props.info.description}
        high={props.info.high}
        low={props.info.low}
        humidity={props.info.humidity}
        wind={props.info.wind}
      />
    </div>
  );
}
