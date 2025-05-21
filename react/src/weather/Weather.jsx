import React, { useState } from "react";
import "./weather.css";

const Weather = () => {
  const [currentData, setCurrentData] = useState("");
  const [locationData, setLocationData] = useState("");
  // const [requestData, setRequestData] = useState("");

  const [loc, setLoc] = useState("dubai");

  const submitHandler = async (e) => {
    e.preventDefault();

    const api = await fetch(
      `https://api.weatherstack.com/current?access_key=7bb03730627b5fdcc9407a92e6df887b&query=${loc}`
    );
    const data = await api.json();

    console.log(data);

    const current = data.current;
    // const request = data.request;
    const location = data.location;
    console.log(current);
    // console.log(request);
    console.log(location);

    setCurrentData(current);
    setLocationData(location);
    // setRequestData(request);
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="search">
          {/* <label htmlFor="">Search by location</label> */}
          <input
            className="search-bar"
            type="text"
            onChange={(e) => setLoc(e.target.value)}
            placeholder="Search by Location"
          />
          <button>Search</button>
        </div>
      </form>

      <div>
        {currentData != "" ? (
          <div className="main-content">
            <p>
              {locationData.name}, {locationData.country}
            </p>
            <div className="first-main-content">
              <div>
                <img src={currentData.weather_icons[0]} />
                <p>{currentData.weather_descriptions}</p>
              </div>
              <div className="first-paras">
                <p>{currentData.temperature} °c</p>
              </div>
              <div className="second-paras">
                <p>Humidity : {currentData.humidity} °c</p>
                <p>wind speed : {currentData.wind_speed} km/h</p>
                <p>Pressure : {currentData.pressure} mb</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="first-text">
            Welcome to Weather APP 🙂<p>Search for weather updates</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
