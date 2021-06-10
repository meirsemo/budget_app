import React from 'react';
import './Search.css';

const search = () => {
    return (
        <form className='search-box'>
                <input className= 'input-searchT'
                    type="text" 
                    placeholder="Search..."/>
                <button className='button-searchT' 
                    type="submit"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default search;
