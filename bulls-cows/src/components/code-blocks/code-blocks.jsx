import React from 'react'
import { Square } from '../square/square'
import style from './code-blocks.module.css'

export const Blocks = ({digits, stage}) => {
    return (
        <div className={style.blocks}>
            {digits.map(item => <Square stage={stage}>{item}</Square>)}
        </div>

    )
}