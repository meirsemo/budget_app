import React from 'react';
import Navbar2 from './Navbar2';
import Search from './Search';
import Weather from './Weather';
import CardT from './CardT';

const weatherApp = () => {
    return (
        <React.Fragment>
           <Navbar2/> 
           <Search/>
           <CardT> 
               <Weather/>
           </CardT>
        </React.Fragment>
    )
}

export default weatherApp;
