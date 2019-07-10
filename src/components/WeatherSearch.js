import React from 'react';

export default class WeatherSearch extends React.Component {

    constructor() {
        super();

        this.search = this.search.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.city);
    }

    onChange(evt) {
        this.setState({city: evt.target.value});
    }

    render() {
        return (
            <div className="input-group">
                <input onChange={this.onChange} type="text" className="form-control" placeholder="Enter City"/>
                <span className="input-group-btn">
                        <button type="submit" className="btn btn-default" onClick={this.search}>
                        <span className="fa fa-search"></span>
                        </button>
                    </span>
            </div>
        )
    }
}