import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Tequila from "meteor/epfl:accounts-tequila";
import App from '../imports/ui/App';

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
  Tequila.start();
});

if (Meteor.isDevelopment) {
  // Put your collections
}
