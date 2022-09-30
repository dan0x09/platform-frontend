# Getting started with developing a new module

Valid locations for modules are ```packages/apps/```, ```packages/libs/```, ```packages/workspace/```.

## applications
Under packages/workspace/blueprints there is a base project for creating applications. Copy paste it into apps (f.e.) and run `npm i` from root. 

## react modules
packages/workspace/blueprints/module

## widget react modules
packages/workspace/blueprints/widget

## adding to scripts
The package.json on root level carries different scripts for starting a module in development mode. They basicly link to subprojects. One needs to specify a script in the subproject and then can reference to it. This way every script is running on root level and there is no need to switch between directories.

# Blueprints
Though blueprints are located in the packages folder, due to being nested in a deeper level, they will not be tracked by lerna and are not installed with `npm i`. This speeds up installation, as well as copy pasting, because of the missing node_modules folders.