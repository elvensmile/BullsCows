import React from 'react'
import cs from 'classnames'
import style from './input.module.css'

export const InputGuess = () => {
    return (<input maxLength={1} className={style['input-guess']}/>)
}