import React from "react";
import "./App.css";
import Search from "./Search";
import Current from "./Current";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Current />
      <Footer />
    </div>
  );
}
