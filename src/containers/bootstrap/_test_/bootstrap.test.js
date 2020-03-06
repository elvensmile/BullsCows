import React from 'react';
import ReactDOM from 'react-dom';
import {store} from "../../../context/store"
import { act } from "react-dom/test-utils"

import {Bootstrap} from "../bootstrap"
import {STAGES} from "../../../consts/text"

let container
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})
describe('Bootstrap container', () => {
    it("renders", () => {
        act(() => {
            ReactDOM.render((
                <store.Provider value={{state: {stage: STAGES.guess, code: [2, 3, 4, 5]}}}>
                    <Bootstrap/>
                </store.Provider>
            ), container)
        })

        expect(container.querySelectorAll('input').length).toBe(4)
    })
})