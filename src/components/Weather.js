import React from 'react';
import './weather.css';
import WeatherRow from './WeatherRow';
import WeatherHeader from './WeatherHeader';

export default class Weather extends React.Component {

    renderForecast() {
        const elems = [];

        this.props.data.list.forEach((weather, idx) => {
            //small hack to get daily forecast instead of hourly
            if (idx % 8 === 0) elems.push(<WeatherRow key={idx} weather={weather}/>);
        });

        return <div className="list-group text-muted">{elems}</div>;
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
