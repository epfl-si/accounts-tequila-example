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
    require: ['group=epfl-dojo|group=idev-fsd-membres'],
    control: ['/private', '/private/editor'],
    getUserId(tequila) {
      //debug(tequila);
      console.debug(tequila);

      // All members of the group 'accounts-tequila-example' get a role
      if (tequila.group.includes('accounts-tequila-example')) {
        // Some of the members are granted admin role, based on their username
        if (['charmier', 'nborboen'].includes(tequila.user)) {
          Roles.setUserRoles(tequila.uniqueid, ['admin'], Roles.GLOBAL_GROUP);
          console.debug(tequila.user, 'ADMIN ROLE');
        // All others members are granted the editor role...
        } else {
          Roles.setUserRoles(tequila.uniqueid, ['editor'], Roles.GLOBAL_GROUP);
          console.debug(tequila.user, 'EDITORS ROLE');
        }
      }

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
