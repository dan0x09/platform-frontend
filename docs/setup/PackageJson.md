# package.json

## lerna
Lerna is used to link packages while developing.
Lerna is running on `postinstall`, making sure all packages are installed automatically for nested projects.

## scripts
There are scripts which are commonly used in node projects. F.e. `npm i` will install all dependencies in all projects. If runnning into strange problems during development, it can help to clean all node_modules and reinstall: `npm run clean && npm i`. F.e. minor versions upgrade automatically sometimes and then interfere with each other over different projects.


Due to the way react is interpreted as JavaScript, packages have to be build to be used by other packages.
This as well is necessary for TypeScript projects.

Letting a compiler watch for changes can help during development:

with the node module tsc-watch we can create and alter components while testing them as import in another package.
We need to open two console windows for that:

```npm run components:dev```

```npm run test:dev```

While the components package is build every time a file changes, the test project will always use the newest build, because instead of using a copy of the local package as node module, lerna links the folder directly. Updates in the components package will trigger updates for both the components compiler as well as the app project.