# Meteor Accounts Tequila Example

This is a demo app which use [accounts-tequila](https://atmospherejs.com/epfl/accounts-tequila)
 ([sources](https://github.com/epfl-idevelop/accounts-tequila)).

This app is based on the Meteor bare example (`meteor create --bare .`).


## Prerequisites

You'll need [Meteor](https://www.meteor.com/install).


## Test new version

In order to test un-published version, you need a `packages` folder at the root
of the project (see [Writing Atmosphere Packages](https://guide.meteor.com/writing-atmosphere-packages.html#local-packages)).

For instance, `ln -s project/packages/epfl_accounts-tequila path/to/accounts-tequila`,
where `path/to/accounts-tequila` is where you have cloned
[accounts-tequila](https://github.com/epfl-idevelop/accounts-tequila), will
worked as expected (`meteor add epfl:accounts-tequila` or change the
`.meteor/packages` file).


# Commands to create from scratch

* `meteor create --bare .`
* The command `meteor` should start the demo app.
* `meteor add epfl:accounts-tequila`
* Add `server/main.js`:
    import Tequila from 'meteor/epfl:accounts-tequila'
    Meteor.startup(function() {
      Tequila.start()
    })
* Add `client/main.js`:
    import Tequila from 'meteor/epfl:accounts-tequila'
    Tequila.start()
