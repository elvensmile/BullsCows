import React, {useState, useContext, useEffect} from 'react'
import style from './field.module.css'
import {Row} from "../../components/row-guess/row"
import {InputGuessField} from "../input-guess-field/input-guess-field"
import {Counter} from "../../components/bulls-cows-counter/counter"
import {Blocks} from "../../components/code-blocks/code-blocks"
import {compareArrays} from "../../utils/utils"
import {STAGES} from "../../consts/text"
import {store} from "../../context/store"

export const Field = ({code, tries}) => {
    const globalState = useContext(store);
    const { dispatch } = globalState;

    const [attempts, setAttempt] = useState([])
    const [currentStage, setStage] = useState(globalState.state.stage)

    const originalCode = code.join('')
    const checkValue = (userCode) => {
        setAttempt([userCode, ...attempts,])
    }
    useEffect(() => {
        setAttempt([])
        setStage(globalState.state.stage)
    }, [code])

    const userCheckedInput = (initialCode, userCode) => {
        const checkedInput = {}
        if (userCode === initialCode) {
            checkedInput.bulls = 4
            checkedInput.cows = 0
            checkedInput.stage = STAGES.win

            if (currentStage !== STAGES.win) {
                setStage(STAGES.win)
                dispatch({ type: STAGES.win, attempts: attempts.length })
            }

        } else {
            const checkedResult = compareArrays([...initialCode], [...userCode])
            checkedInput.bulls = checkedResult.exact
            checkedInput.cows = checkedResult.values
            checkedInput.stage = STAGES.guess
        }

        if (tries > 0 && tries === attempts.length && userCode === attempts[0] && checkedInput.bulls < 4) {
            checkedInput.stage = STAGES.lose

            if (currentStage !== STAGES.lose) {
                setStage(STAGES.lose)
                dispatch({ type: STAGES.lose, attempts: attempts.length })
            }
        }

        return checkedInput
    }

    return (
        <div className={style.field}>
            {(currentStage === STAGES.guess || attempts.length < 1) &&
                <Row>
                    <InputGuessField checkValue={checkValue}/>
                </Row>
            }
            {attempts.length > 0 && attempts.map(item => {
                const result = userCheckedInput(originalCode, item)

                return (
                    <Row>
                        <Blocks stage={result.stage} digits={[...item]}/>
                        <Counter bulls={result.bulls} cows={result.cows} total={item.length}/>
                    </Row>)
            })}
        </div>
    )

}