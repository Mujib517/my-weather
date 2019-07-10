import React from "react";
import './weatherRow.css';
import getWeatherIcon from "../getWeatherIcon";

export default (props) => {
    const {weather} = props;

    return (<div className="list-group-item">
        <span className="col-sm-8 weather-date">{new Date(+weather.dt * 1000).toDateString()}</span>
        <span className="col-sm-1">
                <img alt="" className="weather-icon"
                     src={getWeatherIcon(weather.weather[0].main)}/></span>
        <span
            className="col-sm-2 weather-temp">
            <span className="temp-min">{parseInt(weather.main.temp_min)}</span>
            <span className="temp-max">{parseInt(weather.main.temp_max)}°C</span>
        </span>
    </div>)
}
