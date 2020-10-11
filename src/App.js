import React from 'react';
import './App.css';

import {search_phrases} from './list_choices.js';


function App() {
  return (
    <React.Fragment>
    <div className="App">
    <div id="header">CHINESE PHRASES</div>
    <h4 id="subtitle">Search English Phrase</h4>
    <h4 id="subtitle_2">Click Result to Play Mandarin Audio</h4>
    <input id="search_phrase" placeholder="search phrase..." onChange={search_phrases}></input>
    <div id="hold_results"></div>
    </div>
    </React.Fragment>
  );
}

export default App;
