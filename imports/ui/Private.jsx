import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class Private extends Component {
  
  render() {
    let isLoading = this.props.currentUser === undefined;
    if (isLoading) {
      return <h1>Loading</h1>;
    } else {
      console.log(this.props.currentUser);
      return (
        <Fragment>
          <h1>Private</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
                <th scope="col">sciper</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ this.props.currentUser._id }</td>
                <td><a href={"mailto:" + this.props.currentUser.emails }>{ this.props.currentUser.emails }</a></td>
                <td><a href={"https://people.epfl.ch/" + this.props.currentUser._id } target="_blank">{ this.props.currentUser.username }</a></td>
                <td>{ this.props.currentUser.profile.sciper }</td>
              </tr>
            </tbody>
          </table>
        </Fragment>
      )
    }
  }
}

export default withTracker(() => {
  console.log(Meteor.userId());
  let user = Meteor.users.findOne({'_id': Meteor.userId()});
  return {  
    currentUser: user,
  };  
})(Private);