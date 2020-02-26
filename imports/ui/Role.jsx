import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

export default class Role extends Component {

  render() {

    if (!this.props.isLoaded) {
      return <h1>Loading</h1>;
    } else {
      return (
        <Fragment>
          <h1>Roles</h1>
          <p>This page tests the role</p>
        </Fragment>
      )
    }
  }
}

// export default withTracker((props) => {
//   // Client
//
// })(Role);