import React from 'react';
import './weather.css';
import WeatherRow from './WeatherRow';
import WeatherHeader from './WeatherHeader';

export default class Weather extends React.Component {

    renderForecast() {
        return (<div className="list-group text-muted">{
            this.props.data.list.map((weather, idx) => {
                //small hack to get daily forecast instead of hourly
                return idx % 8 === 0 ?
                    <WeatherRow key={idx} weather={weather}/>
                    : null;
            })
        }
        </div>);
    }

    render() {
        const {data} = this.props;
        return (<>
            {data.city && data.list.length > 0 ?
                <div className="card">
                    <WeatherHeader data={data}/>
                    {this.renderForecast()}
                </div>
                : null}
        </>)
    }
}
