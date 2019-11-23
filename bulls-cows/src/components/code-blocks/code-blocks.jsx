import React, { useState } from 'react'
import { Square } from '../square/square'
import style from './code-blocks.module.css'

export const Blocks = ({digits, stage}) => {
  // const [stage, setStage] = useState('guess')
    return (
        <div className={style.blocks}>
            {digits.map(item => <Square stage={stage}>{item}</Square>)}
        </div>

    )
}