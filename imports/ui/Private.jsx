import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class Private extends Component {
  
  render() {
    let isLoading = this.props.currentUser === undefined;
    if (isLoading) {
      return <h1>Loading</h1>;
    }
    return (
      <Fragment>
        <h1>Private</h1>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Email</td>
              <td>UserName</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ this.props.currentUser._id }</td>
              <td>{ this.props.currentUser.emails }</td>
              <td>{ this.props.currentUser.username }</td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    )
  }
}

export default withTracker(() => {
  console.log(Meteor.userId());
  let user = Meteor.users.findOne({'_id': Meteor.userId()});
  return {  
    currentUser: user,
  };  
})(Private);