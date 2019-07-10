import React from 'react';
import getWeatherIcon from "../getWeatherIcon";

export default (props) => {
    const {data} = props;

    return (<>
        <h3 className="city">{data.city.name}</h3>
        <div className="condition"> {data.list[0].weather[0].main}
        </div>
        <div>
            <img alt="" width="100" height="100" src={getWeatherIcon(data.list[0].weather[0].main)}/>
        </div>
        <h2> {data.list[0].main.temp} °C </h2>
        <div className="temp">
            <span className="temp-min">{parseInt(data.list[0].main.temp_min)}</span>
            <span className="temp-max">{parseInt(data.list[0].main.temp_max)}</span>
            °C
        </div>
    </>)
}