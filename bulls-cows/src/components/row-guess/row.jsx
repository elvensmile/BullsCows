import React from 'react'
import style from './row.module.css'

export const Row = ({children}) => {
    return (
        <div className={style["row"]}>
            {children}
        </div>
    ) }