import "../App.css";
import React, { useState, useEffect } from "react";
import { fetchWeather } from "../api/fetchWeather";

export default function WeatherInfos() {
  // Displaying time
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery("");
    }
  };

  document.addEventListener("touchstart", function () {}, true);

  

  return (
    <div className="box-of-weather">
      <div className="weather">
        <h1 className="box-title">Weather</h1>
        <p className="box-date-and-time-infos">
          {date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
           .replace(/(:\d{2}| [AP]M)$/, "") + " - " + date.toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric",year: 'numeric'})}
        </p>
      </div>
      <br />
      {/* Container box */}
      <div className="container">
        <div className="column-1 box">
          <div className="search-container">
            <input
              type="text"
              className="search-box"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={search}
              id="search-box"
            />
            <label htmlFor="search-box">
              <i className="fi fi-rr-search search-icon"></i>
            </label>
          </div>
          {console.log(weather)}
          <div className="main-container">
            {weather.main && (
              <>
                <div className="row">
                  <div className="first-column">
                    <div className="city">
                      <span className="temperature">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                      </span>
                      <h1 className="name-of-city-and-country">
                        {weather.name} , {weather.sys.country}
                      </h1>
                      {/* <div className="info">
                        <img
                          className="city-icon"
                          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                          alt={weather.weather[0].description}
                        />
                        <p>{weather.weather[0].description}</p>
                      </div> */}
                    </div>
                  </div>
                  <div className="second-column">
                    <h1 className="column-2-title">Weather details</h1>
                    <div className="detail-one">
                      <h5 className="name-of-parameter">Humidity</h5>
                      <span className="value-of-parameter">
                        {weather.main.humidity} %
                      </span>
                    </div>
                    <div className="detail-one">
                      <h5 className="name-of-parameter">Wind</h5>
                      <span className="value-of-parameter">
                        {weather.wind.speed} km/h
                      </span>
                    </div>
                    <div className="detail-one">
                      <h5 className="name-of-parameter">Pressure</h5>
                      <span className="value-of-parameter">
                        {weather.main.pressure} mbar
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
