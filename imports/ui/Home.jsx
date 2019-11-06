import React, { Component, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';

export default class Home extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      markdown: '',
    }
  }

  componentDidMount() {
    let markdownFile = 'README.md';
    Meteor.call(
      'getMarkdown',
      markdownFile,
      (errors, data) => {
        if (errors) {
          console.log(errors);
        } else {
          this.setState({markdown: data});
        }
      }
    );
  }

  render() {
    return (
      <Fragment>
        <ReactMarkdown source={this.state.markdown} />
      </Fragment>
    )
  }
}