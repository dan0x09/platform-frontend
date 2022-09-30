# Setup

## installation


Run `npm i` to install all dependencies. Run `npm run components:dev` for a components module compiler. Run `npm run widgets:dev` for a widget module compiler. (Both are needed on first installation)

`npm run lohna:dev` starts a local web server for developing with the lohna application.

Write your own scripts by altering the package.json files.
## compilation + builds
Modules will probably be built by a TypeScript compiler. The build folder should not be part of the remote repository, as it is a reproducable version of the modules source code. the components module as well as other modules can be build using a npm script.