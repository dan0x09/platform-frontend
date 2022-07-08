# local dependencies with lerna

## lerna
Lerna organizes packages under ./packages/ (configurable in lerna.json). These are nested node projects. To add a dependency to a local package, use a npm script (if you use a local lerna installation) and type:

``` npm i && cd ./packages/install-to/ && lerna add pkg-to-install ```