import React from "react"
import renderer from 'react-test-renderer'

import {Row} from "../row"

describe('Row component', () => {

    const RowTest = renderer
        .create(<Row>
                    <p>Oh, sweet child of mine!</p>
                </Row>)

    it('renders correctly', () => {
        expect(RowTest.toJSON()).toMatchSnapshot()
    })

    it('renders children correctly', () => {
        expect(RowTest.root.children.length).toBe(1)
        expect(RowTest.root.findByType('p').children).toStrictEqual(['Oh, sweet child of mine!'])
    })
})