# Getting started

## applications
Under packages/workspace/blueprints there is a base project for creating applications. Copy paste it into apps (f.e.) and run `npm i` from root. 

## react modules
packages/workspace/blueprints/module

## widget react modules
packages/workspace/blueprints/widget

# Blueprints
Though blueprints are located in the packages folder, due to being nested in a deeper level, they will not be tracked by lerna and are not installed with `npm i`. This speeds up installation, as well as copy pasting, because of the missing node_modules folders.