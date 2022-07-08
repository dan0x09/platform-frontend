/**
 * @jest-environment jsdom
 */

 import { render, screen } from '@testing-library/react'
 import { Page } from "../../../src"
 
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