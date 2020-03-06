import React, {createContext, useReducer} from 'react'
import {STAGES} from "../consts/text"
import {shuffleArray} from "../utils/utils"
const base = [1,2,3,4,5,6,7,8,9,0]

const initialState = {stage: STAGES.start, code: null}
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'guess':
                shuffleArray(base)
                const code = base.slice(0,4)
                return {...state, stage: STAGES.guess, attempts: 0, code: code}
            case 'win':
                return {...state, stage: STAGES.win, attempts: action.attempts}
            case 'lose':
                return {...state, stage: STAGES.lose, attempts: action.attempts}
            default:
                return initialState
        }
    }, initialState)

    return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }