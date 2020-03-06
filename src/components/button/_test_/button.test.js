import React from "react"
import { act } from "react-dom/test-utils"

import renderer from 'react-test-renderer'

import { Button} from "../button"

describe('Button component', () => {
    let testCount = 0
    const submitButton = renderer
        .create(<Button onClick={() => {++testCount}}/>)
    const textButton = renderer
        .create(<Button>Push me!</Button>)

    it('renders correctly', () => {
        expect(submitButton.toJSON()).toMatchSnapshot()
        expect(textButton.toJSON()).toMatchSnapshot()
    })

    it('clicks properly', () => {
        expect(testCount).toBe(0)
        act(submitButton.root.props.onClick)
        expect(testCount).toBe(1)
    })
})