import React, {useContext} from 'react'
import style from './bootstrap.module.css'

import {Field} from "../field/field"
import {store} from "../../context/store"

export const Bootstrap = () => {
    const gameState = useContext(store);
    const code =  gameState.state.code

    return (gameState.state.code && <Field code={code} total={4} tries={0}/>)
}