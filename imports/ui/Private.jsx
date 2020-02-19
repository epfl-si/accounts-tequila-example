import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class Private extends Component {
  
  render() {
    
    if (!this.props.isLoaded) {
      return <h1>Loading</h1>;
    } else {
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
              
              { this.props.users.map((user, index) => (
                
              <tr key={ index }>
                <td>{ user._id }</td>
                <td><a href={"mailto:" + user.emails[0].address }>{ user.emails[0].address }</a></td>
                <td><a href={"https://people.epfl.ch/" + user._id } target="_blank">{ user.username }</a></td>
                <td>{ user.profile.sciper }</td>
              </tr>

              ))}
              
            </tbody>
          </table>
        </Fragment>
      )
    }
  }
}

export default withTracker(() => {
  // Client
  Meteor.subscribe('userData');

  let users = Meteor.users.find({}).fetch();
  let isLoaded = true;

  users.map( user => { 
    isLoaded = isLoaded && 'emails' in user;
  })
  
  return {  
    isLoaded: isLoaded,
    users: users,
  };  
})(Private);