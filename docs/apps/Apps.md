# Apps

## setup
Within the packages/workspace directory is a project blueprint, called `` test ``. TODO
One can simply copy-paste the project. There might be the need for a routing system, as well as a local storage, which both are easy to add for react.

To start the new project as development server, we need to add a new npm script to the top level package.json file. This can be copied from the script test:dev, for most part. To run the server, go to the top level of this repo and run `npm run myScript:name` from console. Lerna is installed as a devDependency on top level, but to use it without writing commands as npm scripts, it might be usefull to install it globally.

If there are problems with lerna, or the way local packages are handled when not using lerna, it is always possible to add modules to nested package.json's by hand, and run `npm install` on top level afterwards.

## routing + storage
Routing can be accomplished with the react-routing package.

## PWA - progressive web apps
TODO