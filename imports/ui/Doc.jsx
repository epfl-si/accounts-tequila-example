import React, { Component, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';

export default class Doc extends Component {

  constructor(props){
    super(props);

    this.state = {
      markdown: '',
    }
  }

  getMDFileContent= (markdownFile) => {
    // let markdownFile = this.props.match.params.md_file;
    // console.log(this.props.match.params);
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
    if (this.props.match.params.md_file != '') {
      this.getMDFileContent(this.props.match.params.md_file);
    }
    return (
      <Fragment>
        <ReactMarkdown source={this.state.markdown} />
      </Fragment>
    )
  }
}