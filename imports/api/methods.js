import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'getMarkdown'(markdownFile) {
      return Assets.getText(markdownFile);
  }
});  