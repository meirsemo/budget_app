import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/services" component={Home}/>
          </Switch>
        </Router>
    </div>);
  }
}

export default App;
