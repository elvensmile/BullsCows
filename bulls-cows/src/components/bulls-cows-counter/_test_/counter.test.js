import React from "react"
import { act } from "react-dom/test-utils"

import renderer from 'react-test-renderer'

import { Counter } from "../counter"

describe('Counter component', () => {
    const randomCounter = renderer
        .create(<Counter bulls={2} cows={1} total={4}/>)
    const winCounter = renderer
        .create(<Counter bulls={4} cows={0} total={4}/>)

    it('renders correctly', () => {
        expect(randomCounter.toJSON()).toMatchSnapshot()
        expect(winCounter.toJSON()).toMatchSnapshot()
    })

    it('has correct circles', () => {
        expect(randomCounter.root.findAllByProps({className: "circle bull"}).length).toBe(2)
        expect(randomCounter.root.findAllByProps({className: "circle cow"}).length).toBe(1)
        expect(randomCounter.root.findAllByProps({className: "circle unguessed"}).length).toBe(1)

        expect(winCounter.root.findAllByProps({className: "circle bull"}).length).toBe(4)
        expect(winCounter.root.findAllByProps({className: "circle cow"}).length).toBe(0)
        expect(winCounter.root.findAllByProps({className: "circle unguessed"}).length).toBe(0)
    })
})

