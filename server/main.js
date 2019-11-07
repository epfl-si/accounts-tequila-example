import Tequila from "meteor/epfl:accounts-tequila";
import { Meteor } from "meteor/meteor";
import '../imports/api/methods';
import debug_ from 'debug';
const debug = debug_('accounts-tequila-example');
 
Meteor.startup(() => {
  Tequila.start({
    request: ['uniqueid', 'email'],
    control: ['/private'],
    getUserId(tequila) {
      debug(tequila);
      return tequila.uniqueid;
    },
    upsert: (tequila) => ({ $set: {
      profile: {
        sciper: tequila.uniqueid
      },
      username: tequila.user,
      emails: [ tequila.email ],
    }}),
  });
});
