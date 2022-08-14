/**
 * @jest-environment jsdom
 */

// TODO fix jest bugs

//  import React from 'react'
//  import { fireEvent, render, screen } from '@testing-library/react'
//  import Searchbar from '../../../src/components/Searchbar'

//  describe('Searchbar', function () {
// 	const items = [
// 		{
// 			field: "1"
// 		},
// 		{
// 			field: "12"
// 		},
// 		{
// 			field: "2"
// 		},
// 		{
// 			field: "13"
// 		}
// 	]


//     it('should find items', function () {
// 		const expectedSets = [
// 			{
// 				field: "1"
// 			},
// 			{
// 				field: "12"
// 			},
// 			{
// 				field: "13"
// 			}
// 		]

// 		const setWrapper = {
// 			set: [] as Array<any>
// 		}

//         render(
//             <Searchbar id="testSearchbar" data={items} find={(sub, val) => sub.field.includes(val)} setSubSet={(s) => setWrapper.set = s} />
//         )
// 		const input = screen.getByTestId("search-bar-input")
// 		input.focus()
// 		fireEvent.select(input, {target: {
// 			selectionStart: 0,
// 			selectionEnd: 0
// 		}})
// 		fireEvent.input(input, {target: {
// 			value: '1',
// 			selectionStart: 1,
// 			selectionEnd: 1
// 		}})
        
//         expect(JSON.stringify(setWrapper.set)).toBe(JSON.stringify(expectedSets))
//     })

// 	it('should call find on items', function () {
//         const onClickSpy = jest.fn()
// 		render(
//             <Searchbar id="testSearchbar" data={items} find={onClickSpy} setSubSet={() => {}} />
//         )
// 		const input = screen.getByTestId("search-bar-input")
// 		input.focus()
// 		fireEvent.select(input, {target: {
// 			selectionStart: 0,
// 			selectionEnd: 0
// 		}})
// 		fireEvent.input(input, {target: {
// 			value: 'test',
// 			selectionStart: 1,
// 			selectionEnd: 1
// 		}})
        
//         expect(onClickSpy).toHaveBeenCalledTimes(items.length)
//     })
// })