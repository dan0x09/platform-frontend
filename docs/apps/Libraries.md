# Libraries

## setup
Libraries should be located under the packages/libs/ folder. These include the sgwidgets module as well as  the sgcomponents module and are used by apps. They work as a TypeScript/JavaScript module and are installed with lerna or by writing there name in a package.json by hand and then running npm install on top level. Versioning is not that important due to the lerna configuration using independent versions, they can be written down as module using "*" as version number and lerna takes care of the rest.

## sgcomponents example
The local package(/module) sgcomponents is written in TypeScript and must be built before using it in other packages. It features a build folder which is excluded by git.