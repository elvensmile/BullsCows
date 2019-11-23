import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Square } from './components/square/square'
import {Blocks} from "./components/code-blocks/code-blocks";
import {Counter} from "./components/bulls-cows-counter/counter";
import {Row} from "./components/row-guess/row";
import {InputGuess} from "./components/input/input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Row><Blocks stage="guess" digits={[1,2,3,4]}/>
          <Counter bulls={3} cows={0} total={4}/>
          </Row>
          <Row><Blocks stage="lose" digits={[1,2,3,4]}/>
              <Counter bulls={3} cows={0} total={4}/>
          </Row>
          <Row><Blocks stage="win" digits={[1,2,3,4]}/>
              <Counter bulls={3} cows={0} total={4}/>
          </Row>
          <Row><InputGuess/><InputGuess/><InputGuess/><InputGuess/><InputGuess/></Row>

      </header>
    </div>
  );
}

export default App;
