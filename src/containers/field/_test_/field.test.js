import React from "react"
import renderer from 'react-test-renderer'
import {store} from "../../../context/store"


import {Field} from "../field"
import {STAGES} from "../../../consts/text"

describe('Field container', () => {

    const FieldTest = renderer
        .create(
            <store.Provider value={{state: {stage: STAGES.guess, code: [2, 3, 4, 5]}}}>
                <Field code={[3, 2, 1, 5]} total={4} tries={0}/>
            </store.Provider>)

    it('renders correctly', () => {
        expect(FieldTest.toJSON()).toMatchSnapshot()
    })

})