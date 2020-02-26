# Meteor Accounts Tequila Example

This is a demo app which use [accounts-tequila](https://atmospherejs.com/epfl/accounts-tequila)
 ([sources](https://github.com/epfl-si/accounts-tequila)).

This app is based on the Meteor minimal example (`meteor create --minimal .`).


## Prerequisites

You'll need [Meteor](https://www.meteor.com/install).


## Tests using this project

These command will guide you to get this project up and running on your machine:
1. `git clone git@github.com:epfl-si/accounts-tequila-example.git`
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


## How to limit access to specific pages

If one wants to have both public and private spaces on a web site, the tequila
option `control` can have a list of routes that needs authentication.

```
Tequila.start({
[...]
  control: ['/private', '/other'],
[...]
}),
```


## Limit allowed user within the Tequila request

The tequila server have a `require` parameter to specify a filter on attributes
that one needs to be allowed. It's similar to the `TequilaAllowIf` in the apache
module.

This is the most easiest way to secure site or pages, but you won't have the
possibility to have separate rights for different spaces (no granularity).

1. e.g. if one want to the `/private` to be accessed only by the members of the
group `epfl-dojo` or the group `idev-fsd-membres` :
```
Tequila.start({
[...]
  control: ['/private'],
  require: ['group=epfl-dojo|group=idev-fsd-membres'],
[...]
}),
```
2. e.g. if one want to the `/private` to be accessed only by the username `kermit` :
```
Tequila.start({
[...]
  control: ['/private'],
  require: ['username=kermit'],
[...]
}),
```


## Limit allowed user within the application

[WIP]

If one wants more levels of granularity, the access control have to be built
inside the application. That way one can develop a more adaptive way to set
permissions on different pages or spaces of the website.

In order to do that, we do recommend the
[alanning:roles](https://guide.meteor.com/accounts.html#alanning-roles) package.

To install it: ` meteor add alanning:roles`. It will create the `roles` and
`role-assignment` collection in MongoDB.

This package expects the `roles` collection to have the defined roles' levels.
The file `server/fixtures.js` ensures that some roles are defined (by default
`admin`, `editor` and `default` roles are created).






## Development - Test a new `accounts-tequila` version locally

In order to test un-published version, you need a `packages` folder at the root
of the project (see [Writing Atmosphere
Packages](https://guide.meteor.com/writing-atmosphere-packages.html#local-packages)).

For instance, `ln -s project/packages/epfl_accounts-tequila
path/to/accounts-tequila`, where `path/to/accounts-tequila` is where you have
cloned [accounts-tequila](https://github.com/epfl-si/accounts-tequila),
will worked as expected (`meteor add epfl:accounts-tequila` or change the
`.meteor/packages` file).


## Debug

As in commit
[c074396](https://github.com/epfl-si/accounts-tequila-example/commit/c074396d7da67b883604c4c17d40cff2c6326e2c),
the [debug](https://www.npmjs.com/package/debug) package was added as an npm
module. You can run `npm run debug` to launch the app and see all the `debug()`
information.
