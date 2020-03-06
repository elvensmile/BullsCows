import React from "react"
import renderer from 'react-test-renderer'
import { InputGuessField } from "../input-guess-field"

describe('InputGuessField container', () => {

    const InputGuessFieldTest = renderer
        .create(<InputGuessField checkValue={{values: 2, exact: 2}}/>)

    it('renders correctly', () => {
        expect(InputGuessFieldTest.toJSON()).toMatchSnapshot()
    })
})