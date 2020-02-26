import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component, Fragment } from 'react';
import Home from './Home';
import Header from './Header';
import Doc from './Doc';
import Private from './Private';
import Role from './Role';

export class App extends Component {
  render() {

    if (this.props.isLoading) {
      return (<h1>Loading</h1>);
    } else {
      return (
        <Router>
          <Header />
          <div className="App container">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/doc/:md_file" component={ Doc } />
              <Route exact path="/private" component={ Private } />
              {
                this.props.currentUserIsAdmin || this.props.currentUserIsEditor ? (
                  <Fragment>
                    <Route exact path="/private/editor" component={ Role } />
                    <Route exact path="/private/admin" component={ Role } />
                    <Route exact path="/editor" component={ Role } />
                    <Route exact path="/admin" component={ Role } />
                  </Fragment>
                ) : null
              }
            </Switch>
          </div>
        </Router>
      )
    }
  }
}

export default withTracker(() => {
  //debugger;
  let isAdmin = Roles.userIsInRole(Meteor.userId(), ['admin'], 'Roles.GLOBAL_GOUP');
  let isEditor = Roles.userIsInRole(Meteor.userId(), ['editor'], 'Roles.GLOBAL_GOUP');
  let userRole = isAdmin || isEditor;
  let isLoading;
  let currentUser;

  if (userRole) {
    isLoading = Meteor.user() === undefined;
    currentUser = Meteor.user();
  } else {
    isLoading = false;
    currentUser = '';
  }

  return {
      isLoading: isLoading,
      currentUser: currentUser,
      currentUserIsAdmin: isAdmin,
      currentUserIsEditor: isEditor,
    };
})(App);