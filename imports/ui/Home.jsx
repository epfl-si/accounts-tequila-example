import React, { Component, Fragment } from 'react';
import { Link, withRouter} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default class Home extends Component {

  render() {
    return (
      <div className="main">
        <h1>Accounts Tequila example</h1>
        <p>
          This is a <a href="https://www.meteor.com/" target="_blank">Meteor</a> app using the <a href="http://www.passportjs.org/" target="_blank">Passport authentication middleware</a> with the <a href="https://github.com/epfl-si/accounts-tequila" target="_blank">accounts-tequila</a> strategy.
          The <a href="https://github.com/epfl-si/accounts-tequila" target="_blank">accounts-tequila</a> strategy uses the Meteor's core package <a href="https://guide.meteor.com/accounts.html#accounts-base" target="_blank">accounts-base</a>.
          Consequently, the <a href="https://docs.meteor.com/api/accounts.html" target="_blank">documentation of how to use Meteor's accounts functionality</a> is resourceful.
        </p>
        <ul>
          <li>Please check the <Link to="/doc/README.md">README.md</Link> of the project.</li>
          <li>EPFL Tequila attributes are listed <Link to="/doc/TEQUILA_ATTRIBUTES.md">here</Link>.</li>
          <li>You can try to login <Link to="/private">here</Link>.</li>
        </ul>
        <hr />
        <p>Please join this project, question, issues and pull request are very welcome: <a href="https://github.com/epfl-si/accounts-tequila-example/issues">https://github.com/epfl-si/accounts-tequila-example/issues</a>.</p>
      </div>
    )
  }
}