import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

class Header extends Component {
  logMeOutNow = () => {
    Meteor.logout()
    this.props.history.push('/');
  }
  displayLoginLogout = () => {
    if (this.props.userId) {
      return <a className="logout-link" href="" onClick={this.logMeOutNow}>logout</a>
    } else {
      return <a className="login-link" href="/private">login</a>
    }
  }
  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Doc
              </a>
              <div className="dropdown-menu" >
                <Link className="dropdown-item" to="/doc/README.md">Readme</Link>
                <Link className="dropdown-item" to="/doc/TEQUILA_ATTRIBUTES.md">Tequila attributes</Link>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/private">Private</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Roles
              </a>
              <div className="dropdown-menu" >
                <a className="dropdown-item" href="/private/editor">Editor (private)</a>
                <a className="dropdown-item" href="/editor">Editor</a>
                <a className="dropdown-item" href="/private/admin">Admin (private)</a>
                <a className="dropdown-item" href="/admin">Admin</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="userMenu">
          { this.displayLoginLogout() }
        </div>
      </header>
    )
  }
}



export default withRouter(withTracker(() => {
  return {
    userId: Meteor.userId(),
  };
})(Header));






