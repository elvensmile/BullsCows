import React, {useContext} from 'react'
import './App.css'
import {Header} from "./components/header/header"
import {Bootstrap} from "./containers/bootstrap/bootstrap"
import {Button} from "./components/button/button"
import {store} from "./context/store"
import {FinalText} from "./components/final-text/final-text"
import {STAGES} from "./consts/text"

function App() {
    const gameState = useContext(store)
    const {dispatch} = gameState

    return (
        <div className="App">
            <header className="App-header">
                <Header/>
                {gameState.state.stage === (STAGES.win || STAGES.lose) &&
                <FinalText stage={gameState.state.stage} attempts={gameState.state.attempts}/>}
                {gameState.state.stage !== STAGES.guess &&
                <Button onClick={() => {
                    dispatch({type: STAGES.guess})
                }}>Отгадать Код</Button>}
                <Bootstrap/>
            </header>
        </div>
    )
}

export default App
