import React from 'react'
import cs from 'classnames'
import style from './square.module.css'

export const Square = (props) => {

    return (
    <div className={cs(style["square-wrapper"], style[`${props.stage}`])}>
        <div className={style["square-digit"]}>{props.children}</div>
    </div>
) }
