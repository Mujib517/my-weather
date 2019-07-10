import React from 'react';
import './weather.css';
import WeatherRow from './WeatherRow';
import WeatherHeader from './WeatherHeader';

export default class Weather extends React.Component {

    renderForecast() {
        const elems = [];

        this.props.data.list.forEach((weather, idx) => {
            //small hack to get daily forecast instead of hours
            if (idx % 8 === 0) elems.push(<WeatherRow key={idx} weather={weather}/>);
        });

        return elems;
    }

    render() {
        const {data} = this.props;
        return (
            <>
                {data.city && data.list.length > 0 ?
                    <div className="card">
                        <div className="card-header">
                            <WeatherHeader data={data}/>
                        </div>
                        <div className="list-group text-muted">
                            {this.renderForecast()}
                        </div>
                    </div> : null}
            </>
        )
    }
}
