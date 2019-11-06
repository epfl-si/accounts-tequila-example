import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from "./Home";
import Private from './Private';

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div className="App container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/private" component={ Private } />
          </Switch>
        </div>
      </Router>
      </div>
    )
  }
}