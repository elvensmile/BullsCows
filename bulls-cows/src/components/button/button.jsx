import React from 'react'
import style from './button.module.css'

export const Button = (props) => {
    return (<button className={style.button} onClick={props.onClick}
                    disabled={props.disabled}
                    onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}>{props.children || '⏎'}</button>)
}