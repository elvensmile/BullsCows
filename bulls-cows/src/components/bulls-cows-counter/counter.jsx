import React from 'react'
import cs from 'classnames'
import style from './counter.module.css'

const Circle = ({color}) => <div className={cs(style["circle"], style[`${color}`])}/>

const countGuess = (guess, count) => {
    const circles = []

    for (let i = 0; i < count; i++) {
        circles.push(<Circle color={guess} />)
    }
    return circles
}

export const Counter = ({bulls, cows, total}) => {
    const unguessed = total - (bulls + cows)
    return (
        <div className={style["counter-wrapper"]}>
            {countGuess('bull', bulls)}
            {countGuess('cow', cows)}
            {countGuess('unguessed', unguessed)}
        </div>)
}