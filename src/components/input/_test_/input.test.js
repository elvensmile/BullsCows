import React from "react"
import renderer from 'react-test-renderer'

import { InputGuess } from "../Input"

describe('Input component', () => {

    let testValue = '0'
    const handleChange = (e) => {
        testValue = e.target.value
    }
    const InputTest = renderer
        .create(<InputGuess order={0} onChange={handleChange} value={5}/>)

    it('renders correctly', () => {
        expect(InputTest.toJSON()).toMatchSnapshot()
    })

    it('changes properly', () => {
        const component = InputTest
        let changeComponent = component
        expect(changeComponent.toJSON()).toMatchSnapshot()
        expect(testValue).toBe('0')
        InputTest.root.props.onChange({
            target: { value: '6' }
        });
        // re-rendering
        changeComponent = component
        expect(testValue).toBe('6')
        expect(changeComponent.toJSON()).toMatchSnapshot()

    })
})