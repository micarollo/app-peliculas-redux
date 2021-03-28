import React from 'react';
import {Provider} from 'react-redux'
import './App.css';

import Landing from './components/Landing'

import store from './store'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Landing/>
      </div>
    </Provider>
  );
}

export default App;
