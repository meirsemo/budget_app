import React, { useState } from 'react';
import './HeaderCard.css';

const headerCard = () => {
    const [clicked, setClicked] = useState(false);
    const addFav = () => {
        setClicked(!clicked);
    }
    return (
        <div className='header'>

            <div className='sear-city'>
                <i className="far fa-window-close"></i>
                <div className='details'>
                    <h1>TEL-AVIV</h1>
                    <h1>38° C</h1>
                </div>
            </div>
            
            <div className='fav'>
                <i className={clicked ? "fas fa-heart": "far fa-heart"}></i>
                <button className='btnT' onClick={addFav}>Add to Favorites</button>
            </div>
            
        </div>
    )
}

export default headerCard;
