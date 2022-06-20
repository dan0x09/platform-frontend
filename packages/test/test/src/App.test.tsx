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
    })

    afterEach(() => {
        document.body.removeChild(container)
        container.remove()
    })

    it('should display test2 package', function () {
        ReactDOM.render(<App/>, container)
        const header = container.querySelector('h1')
        expect(header?.textContent).toBe("TEST2")
    });
});