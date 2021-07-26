import React, {useState} from "react";
import Cell from "./components/cell";
import './App.css';

const App = () => {

    const [cellsArr, setCellsArr] = useState([]);

    (function cells() {
        for (let i = 0; i < 36; i++) {
            cellsArr[i] = {hasItem: false, open: false}
        }

        const randomCell = Math.floor(Math.random() * (35 + 1));
        cellsArr[randomCell].hasItem = true;
        console.log(cellsArr)
    }());

    let cellClass = ['cell'];

    const click = () => {
        cellClass.push('open');
        console.log(cellClass)
    }


    const printCells = cellsArr.map(() => {
        return <Cell classes={cellClass.join(' ')} open={() => click()}/>
    });

    const playingField = () => {
        return (
            <div className="field">
                {printCells}
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
            {playingField()}
            {tries()}
            {button()}
        </div>
    );
};

export default App;
