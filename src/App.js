import React from 'react';
import './App.css';
import Header from './components/Header';
import WeatherContainer from './components/WeatherContainer';

function App() {
    return (
        <div className="app">
            <Header/>
            <WeatherContainer />
        </div>
    );
}

export default App;
