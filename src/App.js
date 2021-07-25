import {useState} from "react";
import './App.css';

const App = () => {

const cells = () => {
  let cellsArr = [];

  for (let i=0; i < 36; i++) {
    cellsArr[i] = {hasItem: false, open: false}
  }

  console.log(cellsArr)
}


  const cell = () => {
    return (
        <div className="cell">

        </div>
    );
  };

  const playingField = () => {
    return (
        <div className="field">

        </div>
    );
  };

  const tries = () => {
    return (
        <p>
          Tries: 0
        </p>
    );
  };

  const button = () => {
    return (
        <p>
          <button className="btn" type="button">Reset</button>
        </p>
    );
  };

  return (
      <div className="container">
        {cells()}
        {playingField()}
        {tries()}
        {button()}
      </div>
  );
};

export default App;
