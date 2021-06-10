import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import BudgetContainer from './containers/BudgetContainer';
// import ColorGame from './components/colorGame/colorGame';
// import { GlobalContextProvider } from './context/GlobalState';

import WeatherApp from './components/weatherApp/WeatherApp';
import Home from './components/Home';
// import Navbar from './components/Navbar/Navbar';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/services" component={WeatherApp}/>
          </Switch>
        </Router>
    </div>);
  }
}

export default App;
