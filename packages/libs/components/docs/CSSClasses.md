# CSS in sgcomponents

Css can easily been overritten using CSS files in applications.

## some examples

In generel the Style.css file inside the sgcomponents' src/ folder contains all classes which can be overritten in an application, every class starting with one underscore are implemented with and without, sometimes including classes between them. Classes starting with two underscores can be overritten, however they are ment to be private, as they implement responsive styling for subcomponents, which themself are not visible to the developer using sgcomponents as package.

Examples for classes which are ment to be overriten are:
color0, color1, color2, Page, PageMobile, Site, Button, ...