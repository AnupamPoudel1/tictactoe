import React from 'react';

const Cell = ({ cells, id, cell, setCells, turn, setTurn, winner }) => {

    const handleClick = (e) => {
        const taken = e.target.firstChild.classList.contains("circle") || e.target.firstChild.classList.contains("cross");

        if (!taken) {
            if (turn === "circle") {
                e.target.firstChild.classList.add("circle");
                handleClassChange("circle");
                setTurn("cross");
            }
            else if (turn === "cross") {
                e.target.firstChild.classList.add("cross");
                handleClassChange("cross");
                setTurn("circle");
            }
        }
    }

    const handleClassChange = (cN) => {
        const nextCells = cells.map((cell, index) => {
            if (index === id) {
                return cN
            }
            else {
                return cell
            }
        })
        setCells(nextCells);
    }

    return (
        <div id={id} className='h-28 w-28 max-sm:h-24 max-sm:w-24 border border-white flex justify-center items-center m-2 max-sm:m-1 cursor-pointer box-border' onClick={!winner && handleClick}>
            <div className={cell}></div>
        </div>
    );
}

export default Cell
