import React from 'react';
import HeaderCard from './HeaderCard';
import CurrentWeather from './CurrentWeather';
import './Weather.css';

const weather = () => {
    return (
        <div>
            <HeaderCard/>
            <h1 className='clouds'>Scattered clouds</h1>
            <CurrentWeather/>
        </div>
    )
}

export default weather;
