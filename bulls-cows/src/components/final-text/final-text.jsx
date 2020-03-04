import React from 'react'
import style from './final-text.module.css'
import {FINAL} from "../../consts/text"

export const FinalText = ({stage, attempts}) => (
    <div className={style.final}>
        <h3>{FINAL[stage]}</h3>
        <h3>{FINAL.attempts}{attempts}</h3>
    </div>
)