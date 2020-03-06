import React from "react"
import renderer from 'react-test-renderer'

import {FinalText} from "../final-text"
import {FINAL} from "../../../consts/text"


describe('Final Text component', () => {

    const FinalTextTest = renderer
        .create(<FinalText stage={'win'} attempts={7}/>)

    it('renders correctly', () => {
        expect(FinalTextTest.toJSON()).toMatchSnapshot()
    })

    it('renders correct text', () => {
        expect(FinalTextTest.root.findAllByType('h3')[0].children).toStrictEqual([FINAL['win']])
        expect(FinalTextTest.root.findAllByType('h3')[1].children).toStrictEqual([FINAL.attempts, "7"])
    })

})