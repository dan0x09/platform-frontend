# local dependencies with lerna

## lerna
Lerna organizes packages under ./packages/ (configurable in lerna.json). These are nested node projects. To add a dependency to a local package, use a npm script (if you use a local lerna installation) and type:

``` npm i && cd ./packages/install-to/ && lerna add pkg-to-install ```

## dependencies vs. peerDependencies
An easily confusing problem is when to use peerDependencies. They can help with plugin like packages, which use f.e. react as dependency. If the main package, which imports the plugin, uses react too, some functions of react might fail. An example for such a function is `useState`. To overcome this problem, one should specify react as peerDependency in the plugin.

More on peerDependencies can be found here: [Peer Dependencies | Node.js](https://nodejs.org/en/blog/npm/peer-dependencies/)

## devDependencies
These dependencies come with an useful advantage: They are only included while in development. It might be necessary to install a certain compiler to create a build, but this compiler should not be included in the build itself. To accomplish that, the devDependencies section of a package.json features all modules that should be handled this way. Lerna f.e. is such a devDependency.