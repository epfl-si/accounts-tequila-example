# Meteor Accounts Tequila Example

This is a demo app which use [accounts-tequila](https://atmospherejs.com/epfl/accounts-tequila)
 ([sources](https://github.com/epfl-idevelop/accounts-tequila)).

This app is based on the Meteor minimal example (`meteor create --minimal .`).


## Prerequisites

You'll need [Meteor](https://www.meteor.com/install).


## Tests using this project

These command will guide you to get this project up and running on your machine:
1. `git clone git@github.com:epfl-idevelop/accounts-tequila-example.git`
1. `npm i`
1. `meteor`
1. Then you can head to [https://localhost:3000](https://localhost:3000)


## Commands to create from scratch (minimal requirements)

* `meteor create --minimal .` (Note that others options will work as well)
* The command `meteor` should start the minimal app.
* `meteor add epfl:accounts-tequila` add the package and its dependencies.
* Add `server/main.js`:
```
    import Tequila from 'meteor/epfl:accounts-tequila';
    Meteor.startup(function() {
      Tequila.start();
    })
 ```
* Add `client/main.js`:
```
    import Tequila from 'meteor/epfl:accounts-tequila';
    Tequila.start();
```

These are the minimal requirements to use `accounts-tequila`. It will use the
`username` as default ID and all parts of the site will require authentication.


## How to use another ID (e.g. sciper)

One can choose another attribute that `accounts-tequila` will uses as an ID. To
do so, pass some option to the `Tequila.start()` function and redefine the 
`getUserId` function (`server/main.js`): 

```
Meteor.startup(function() {
  Tequila.start({
        getUserId: (tequila) => {
          console.log(tequila);
          return tequila.uniqueid;
        }
  })
})
```

As the `getUserId` function return `tequila.uniqueid`, the sciper will be used 
as the unique identifier for accounts.


## How to request more attributes from Tequila

[Tequila](https://tequila.epfl.ch) may have different connectors do links users
data from differents sources. An installation of [Tequila
server](https://tequila.epfl.ch/download/2.0/docs/install-server.pdf) should
have a [/serverinfo](https://tequila.epfl.ch/serverinfo) page that list all
requestable attributes. In our case, the list is available in the 
[TEQUILA_ATTRIBUTES.md](TEQUILA_ATTRIBUTES.md) file.

To request attributes, add an array to the `request` options, e.g.:

```
Meteor.startup(function() {
  Tequila.start({
        getUserId: (tequila) => {
          console.log(tequila);
          return tequila.uniqueid;
        },
        request: ['uniqueid', 'username', 'name', 'firstname', 'displayname', 'personaltitle', 'email']
  })
})
```

That way, the attributes `uniqueid`, `username`, `name`, `firstname`, 
`displayname`, `personaltitle` and `email` will be requested to and returned by
[Tequila](https://tequila.epfl.ch).


## Development - Test a new `accounts-tequila` version locally

In order to test un-published version, you need a `packages` folder at the root
of the project (see [Writing Atmosphere
Packages](https://guide.meteor.com/writing-atmosphere-packages.html#local-packages)).

For instance, `ln -s project/packages/epfl_accounts-tequila
path/to/accounts-tequila`, where `path/to/accounts-tequila` is where you have
cloned [accounts-tequila](https://github.com/epfl-idevelop/accounts-tequila),
will worked as expected (`meteor add epfl:accounts-tequila` or change the
`.meteor/packages` file).


## Debug

As in commit
[c074396](https://github.com/epfl-idevelop/accounts-tequila-example/commit/c074396d7da67b883604c4c17d40cff2c6326e2c),
the [debug](https://www.npmjs.com/package/debug) package was added as an npm
module. You can run `npm run debug` to launch the app and see all the `debug()`
information.
