import React, {useState, useEffect} from 'react'
import {InputGuess} from "../../components/input/input"
import {Button} from "../../components/button/button"
import style from '../../components/code-blocks/code-blocks.module.css'
import styles from './input-guess-field.module.css'

const initialState = {
    0: "",
    1: "",
    2: "",
    3: ""
}

export const InputGuessField = ({checkValue}) => {
    const [state, setState] = useState(initialState)
    const [error, setError] = useState(false)
    const [showError, setShowError] = useState(false)

    const validate = () => {
        const finalState = new Set(Object.values(state))

        finalState.size < 4 || finalState.has('') ? setError(true) : setError(false)
    }

    useEffect(() => {
        validate()
    }, [state])

    const handleChange = (e) => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    const handleClick = () => {
        if (Object.values(state).join('').length < 4 || error) {
            console.log('error')
        } else {
            checkValue(Object.values(state).join(''))
            setState({...initialState})
        }
    }

    const showErrorPopup = () => {
        setShowError(true)
    }

    const hideErrorPopup = () => {
        setShowError(false)
    }

    return (
        <>
            <div className={style.blocks}>
                {Object.keys(state).map(key => <InputGuess order={key} onChange={handleChange} value={state[key]}/>)}
            </div>
            {(showError && error) && (
                <div className={styles.error}>
                    Заполните все поля. <br/>
                    Цифры должны быть уникальными.
                </div>
            )}
            <Button onClick={handleClick} onMouseEnter={showErrorPopup}
                    onMouseLeave={hideErrorPopup}/>
        </>
    )
}