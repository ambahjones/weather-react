import React from "react";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
