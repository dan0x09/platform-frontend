/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { PageLayout } from "../../../src"

describe('PageLayout', function () {
	it('should render all components', function () {
        render(
            <PageLayout>
                <h1
                    data-testid="row-h1">
                        TEST
                </h1>
                <h2
                    data-testid="row-h2">jo</h2>

                <p
                    data-testid="row-p">some testing. is everything at its place?</p>
            </PageLayout>
        )

        expect(screen.getByTestId("row-h1").textContent).toBe("TEST")
        expect(screen.getByTestId("row-h2").textContent).toBe("jo")
        expect(screen.getByTestId("row-p").textContent).toBe("some testing. is everything at its place?")
    })
})