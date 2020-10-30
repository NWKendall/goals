import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateCity } from "./weather.js";
import moment from "moment";
import "./header.styles.css";

const Header = () => {
  // need weather icon. Maybe modal??
    const { register, handleSubmit } = useForm();
  const today = moment().format("MMMM Do YYYY");
  let [weatherDisplay, setWeatherDisplay] = useState(false);
  const nameInfo = JSON.parse(localStorage.getItem("user"));
  let [weatherInfo, setWeatherInfo] = useState({
    city: "",
    temp: "",
    weather: "",
    dayOrNight: "",
  });
  let iconSrc;

  const onSubmit = async ({ city }) => {
    const { cityDetails, weather } = await updateCity(city);
    const { EnglishName } = cityDetails;
    const { WeatherText, Temperature, isDayTime, WeatherIcon } = weather;
    setWeatherInfo({
      city: EnglishName,
      temp: Temperature.Metric.Value,
      weather: WeatherText,
      dayOrNight: isDayTime,
      icon: WeatherIcon
    });
    iconSrc = `../../img/icons/${weatherInfo.icon}.svg`;
    setWeatherDisplay(!weatherDisplay);
    localStorage.setItem("loc", city);
  };


  useEffect(() => {
    if (localStorage.getItem("loc")) {
      const city = { city: localStorage.getItem("loc") };
      onSubmit(city);
    }
  }, []);

  return (
    <div className="headerStyle">
      <h4>Welcome {nameInfo.first_name} !</h4>
      <h1>Rules, Mantra, Goals!</h1>
      <h4>{today}</h4>
      {!weatherDisplay ? (
        <div className="searchForm">
          <button onClick={() => setWeatherDisplay(!weatherDisplay)}>
            Previous
          </button>
          <input
            name="city"
            type="text"
            placeholder="check out a new city?"
            ref={register}
          />
          <button onClick={handleSubmit(onSubmit)}>GO!</button>
        </div>
      ) : (
        <div className="weatherInfo">
          <h5>{weatherInfo.city}</h5>
          <h5>{weatherInfo.temp} &deg;C</h5>
          <h5>{weatherInfo.weather}</h5>
          <img src="" />
          <button onClick={() => setWeatherDisplay(!weatherDisplay)}>
            Search?
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
