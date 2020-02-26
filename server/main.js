import Tequila from "meteor/epfl:accounts-tequila";
import { Meteor } from "meteor/meteor";
import '../imports/api/methods';
import debug_ from 'debug';
const debug = debug_('accounts-tequila-example');

Meteor.startup(() => {

  // https://docs.meteor.com/api/accounts.html#Meteor-users
  // "By default, the current user’s username, emails and profile are published to the client.
  // You can publish additional fields for the current user with:"
  Meteor.publish('userData', function () {

    let users = Meteor.users.find({ }, {
      fields: { emails: 1 }
    });

    this.ready();

    return users;

  });


  let users = Meteor.users.find({}).fetch();
  console.log(users);

  Tequila.start({
    client: "Account Tequila",
    service: "accounts-tequila-example",
    request: ['uniqueid', 'email', 'group'],
    require: ['(group=epfl-dojo|group=idev-fsd-membres)&(username=~nbo|username=~cha)'],
    control: ['/private', '/private/editor'],
    getUserId(tequila) {
      //debug(tequila);
      console.debug(tequila);

      return tequila.uniqueid;
    },
    upsert: (tequila) => ({ $set: {
      profile: {
        sciper: tequila.uniqueid,
      },
      username: tequila.user,
      emails: [ { address: tequila.email, verified: true } ],
    }}),
  });
});
