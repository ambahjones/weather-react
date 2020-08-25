import React from "react";
import "./App.css";

export default function Search() {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="City to Search"
          className="searchBar"
          id="city-to-search"
          autofocus="on"
        />
        <input
          type="submit"
          value="Search"
          className="searchButton"
          id="search"
        />
        <input
          type="submit"
          value="Current"
          className="currentButton"
          id="current"
        />
      </form>
    </div>
  );
}
