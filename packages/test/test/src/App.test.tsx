/**
 * @jest-environment jsdom
 */

import React from "react"
import * as ReactDOM from "react-dom"
import App from "../../src/App"

describe('App', function () {
    let container:HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div') 
        document.body.appendChild(container)
        ReactDOM.render(<App/>, container)
    })

    afterEach(() => {
        document.body.removeChild(container)
        container.remove()
    })

    it('should display test2 package', function () {
        const header = container.querySelector('h1')
        expect(header?.textContent).toBe("TEST2")
    });
});