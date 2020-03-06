import React from 'react'
import style from './input.module.css'

export const InputGuess = ({order, onChange, value}) => {
    const handleChange = (e)=> {
        onChange(e)
    }
    return (<input autocomplete="off" maxLength={1} className={style['input-guess']} name={order} onChange={handleChange} value={value} />)
}