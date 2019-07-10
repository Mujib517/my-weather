import React from 'react';
import WeatherSearch from "./WeatherSearch";
import Weather from "./Weather";
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
            .then(res => {
                this.setState({data: res.data});
                console.log(this.state.data);
            })
            .catch(() => this.setState({err: true}));
    }

    renderError() {
        return this.state.err ?
            <div className="alert alert-danger">Failed to load data. Please verify your input</div>
            : null;
    }

    onSearch(city) {
        this.setState({city: city}, () => this.getData());
    }

    render() {
        return (<div className="col-md-5">
            {this.renderError()}
            <WeatherSearch onSearch={this.onSearch}/>
            <Weather data={this.state.data}/>
        </div>)
    }
}