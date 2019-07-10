import React from 'react';
import WeatherSearch from "./WeatherSearch";
import Weather from "./Weather";
import Error from './Error';
import config from '../config';
import axios from 'axios';


export default class WeatherContainer extends React.Component {

    constructor() {
        super();

        this.state = {data: [], city: 'Berlin', country: 'de'};
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const url = `${config.apiUrl}?q=${this.state.city},${this.state.country}&appid=${config.apiKey}&units=metric`;
        axios.get(url)
            .then(res => this.setState({data: res.data, err: false}))
            .catch(() => this.setState({err: true}));
    }

    onSearch(city) {
        this.setState({city: city}, () => this.getData());
    }

    render() {
        return (<div className="col-md-5">
            <Error err={this.state.err}/>
            <WeatherSearch onSearch={this.onSearch}/>
            <Weather data={this.state.data}/>
        </div>)
    }
}