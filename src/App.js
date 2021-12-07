import React, { useState } from 'react';
import './App.css';
import Cardarea from './components/CardArea';

function App() {
  const[quotes, setQuotes] = useState([]);
  const reloadPage=()=>{
      window.location.reload();
  }
  return (
    <div >
      <div id="result-modal">
        <div id="modal-content">
          <h1 id="result">No content</h1>
          <button className="reset-button" onClick={reloadPage}>Click here to try again!</button>
        </div>
      </div>
      <h1 className="center">Guess who said... </h1>
      <Cardarea setQuotes = {setQuotes} quotes = {quotes}/>

    </div>
  );
}

export default App;
