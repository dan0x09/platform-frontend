# Blueprints
This folder contains different blueprints which can be inserted as new TypeScript projects under /root/packages .

## Setup
Use cp command or copy-paste a project by hand.

```
cp -R ./blueprints/project-blueprint-x ./packages/new-project-x
```

Note that project blueprints are not connected with the lerna system. Therefore they will not be updated automatically while not located under /root/packages .

## New Blueprints
Create a new project / alter an existing project under ./packages .
Let's call it "new-project-y".
(To create a new minimal node project, use npm init, f.e.)

The following command creates a blueprint:
```
cd ./packages/new-project-y && rm -v -r ./node_modules && cp -R ../new-project-y ../../blueprints/project-blueprint-y
```


