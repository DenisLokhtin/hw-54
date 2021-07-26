import React, {useState} from "react";
import Сell from "./components/cell"
import './App.css';
import Cell from "./components/cell";

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

    function click() {
        console.log('click')
    }

    const printCells = cellsArr.map(() => {
        return <Cell open={() => click()}/>
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
