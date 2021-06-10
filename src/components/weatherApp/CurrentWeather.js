import React from 'react';
import './CurrentWeather.css';

const currentWeather = () => {
    const weather = [{day: 'Sun', temp: '38° C', id: 0}, {day: 'Mon', temp: '38° C', id: 1}, {day: 'Tue', temp: '38° C', id: 2}, 
    {day: 'Wed', temp: '38° C', id: 3}, {day: 'Thu', temp: '38° C', id: 4}]
    return (
        <div>
            <ul className='father'>
               {weather.map(item => (
                    <li className='somting' key={item.id}>
                        <h1>{item.day}</h1>
                        <h1>{item.temp}</h1>
                    </li>)
                )}
            </ul>
        </div>
    )
}

export default currentWeather;
