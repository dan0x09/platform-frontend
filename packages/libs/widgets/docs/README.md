
# This is a module for reusable widgets

It features, among types, exports like the WidgetGrid and the WidgetDisplay.

The WidgetGrid takes a list of WidgetStates. These are configurations which are descriped in ./src/types.ts.

A WidgetDisplay has to be connected to the WidgetGrid by using f. e. React hooks like `useState`. The show function of the WidgetGrid implements a callback which takes a widgetStateWrapper as argument. That wrapper can be stored in a state and is given to the WidgetDisplay. The WidgetDisplay implements a property for updating the state of the widgetStateWrapper.

Configurations of the WidgetState can be stored in modules for reuse. An example can be found in the evaluation-widget module, as well as in the blueprints.