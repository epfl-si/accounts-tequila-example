import Tequila from "meteor/epfl:accounts-tequila";
import { Meteor } from "meteor/meteor";
 
Meteor.startup(() => {
  Tequila.start({
    getUserId(tequila) {
      console.log(tequila);
      return tequila.user;
    }
  });
});
