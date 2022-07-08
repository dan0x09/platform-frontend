/**
 * @jest-environment jsdom
 */

 import { render, fireEvent, screen } from '@testing-library/react'
 import { FAB } from "../../../src"
 
 describe('FAB', function () {
    it('should use onClick', function () {
        const onClickSpy = jest.fn()
        render(
            <FAB onClick={onClickSpy}/>
        )
        fireEvent.click(screen.getByTestId('button-input'))
        
        expect(onClickSpy).toHaveBeenCalled()
    })

    it('should show toggle behavior', function () {
        const onClickSpy = jest.fn()
        render(
            <FAB toggle={true} onClick={onClickSpy}/>
        )
        const n = screen.getByTestId('button-input').className
        fireEvent.click(screen.getByTestId('button-input'))
        
        expect(onClickSpy).toHaveBeenCalled()
        expect(screen.getByTestId('button-input').className).not.toBe(n)
    })
 })