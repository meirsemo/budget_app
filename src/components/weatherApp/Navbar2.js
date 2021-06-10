import React, { useState } from 'react';
import "./Navbar2.css";

const navbar2 = () => {
    const [clicked, setClicked] = useState(false);
    
    const handleClick = () => {
        setClicked(!clicked);
    };
    
    return (
       <nav className="NavbarItemsT">
           <h1 className='navbar-logoT'>WeatherApp</h1>
           <div className="menu-iconT" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
           </div>
           <ul className={clicked ? 'nav-menuT active' : 'nav-menuT'}>
               <li><a>Home</a></li>
               <li><a>Favorites</a></li>
           </ul>
       </nav>
    )
}

export default navbar2;
// setWeather = () => {
//     const city = this.state.searchBarInput;
//     const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
//     const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
//     const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;
//     this.setState({
//       weatherDetails: {},
//       loading: true,
//       error: false
//     }, () => {
//       // Executed as callback function
//       fetch(URL)
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         if(data.cod === 200) {
//           this.setState({
//             weatherDetails: {
//               temperature: data.main.temp,
//               description: data.weather[0].main
//             },
//             loading: false
//           });
//         }else {
//           // If city doesn't exist, throw error
//           throw data.cod
//         }
//       })
//       .catch(err => {
//         console.log(err);
//         this.setState({
//           loading: false,
//           error: true
//         });
//       });
//     });
//   }