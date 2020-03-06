import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./context/store"
import {STAGES} from "./consts/text"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<store.Provider value={{state :{stage: STAGES.start, code: null}}}><App /></store.Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
