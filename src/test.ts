// This file is required by karma.conf.js and loads recursively all the .spec and framework files
// The zone.js import needs to be placed first as it is a side-effect import
import 'zone.js/dist/zone-testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { getTestBed } from '@angular/core/testing';

declare const require: {
    context(
        path: string,
        deep?: boolean,
        filter?: RegExp
    ): {
        <T>(id: string): T;
        keys(): string[];
    };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
