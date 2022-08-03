/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ErrorPage } from "../../../src"

describe('ErrorPage', function () {
	it('displays error code', function () {
		render(
			<ErrorPage />
		)
		
		expect(screen.getByTestId("error-text").innerHTML).toContain("404")
	})
})