# package.json

## lerna
Lerna is used to link packages while developing.
Lerna is running on `postinstall`, making sure all packages are installed.

## scripts
There are scripts which are commonly used in node projects. F.e. `npm i` will install all dependencies in all projects. If runnning into strange problems during development, it can help to clean all node_modules and reinstall: `npm run clean && npm i`


Due to the way react is interpreted as JavaScript, packages have to be build to be used by other packages.

Letting a compiler watch for changes can help during development:

with tsc-watch we can create and alter components while testing them as import in another package.
We need to open two console windows for that:

```npm run components:dev```

```npm run test:dev```

