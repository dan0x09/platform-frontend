/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Page, Row, Site } from "../../../src"

describe('Row', function () {
    it('should render all components', function () {
        render(
            <Row>
                <h1
                    data-testid="row-h1">
                        TEST
                </h1>
                <h2
                    data-testid="row-h2">jo</h2>

                <p
                    data-testid="row-p">some testing. is everything at its place?</p>
            </Row>
        )

        expect(screen.getByTestId("row-h1").textContent).toBe("TEST")
        expect(screen.getByTestId("row-h2").textContent).toBe("jo")
        expect(screen.getByTestId("row-p").textContent).toBe("some testing. is everything at its place?")
    })
})

describe('Site', function () {
    it('should render all components', function () {
        render(
            <Site>
                <h1
                    data-testid="site-h1">
                        TEST
                </h1>
                <h2
                    data-testid="site-h2">jo</h2>

                <p
                    data-testid="site-p">some testing. is everything at its place?</p>
            </Site>
        )

        expect(screen.getByTestId("site-h1").textContent).toBe("TEST")
        expect(screen.getByTestId("site-h2").textContent).toBe("jo")
        expect(screen.getByTestId("site-p").textContent).toBe("some testing. is everything at its place?")
    })
})

describe('Page', function () {
    it('should render all components', function () {
        render(
            <Page>
                <h1
                    data-testid="page-h1">
                        TEST
                </h1>

                <div
                    data-testid="page-div">
                    <h2
                        data-testid="page-h2">jo</h2>

                    <p
                        data-testid="page-p">some testing. is everything at its place?</p>
                </div>
            </Page>
        )

        expect(screen.getByTestId("page-h1").textContent).toBe("TEST")
        expect(screen.getByTestId("page-div").childElementCount).toBe(2)
        expect(screen.getByTestId("page-h2").textContent).toBe("jo")
        expect(screen.getByTestId("page-p").textContent).toBe("some testing. is everything at its place?")
    })
})