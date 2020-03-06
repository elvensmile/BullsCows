import React from "react"
import renderer from 'react-test-renderer'

import { Square} from "../square"

describe('Square component', () => {

    const SquareTest = renderer
        .create(<Square stage={'win'}><p>Oh, sweet child of mine!</p></Square>)

    it('renders correctly', () => {
        expect(SquareTest.toJSON()).toMatchSnapshot()
    })

    it('renders children correctly', () => {
        expect(SquareTest.root.children.length).toBe(1)
        expect(SquareTest.root.findByType('p').children).toStrictEqual(['Oh, sweet child of mine!'])
    })
})