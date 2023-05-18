import React, { useEffect, useState } from 'react'
import Cell from './Cell'

const Gameboard = () => {

    const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
    const [crossScore, setCrossScore] = useState(0);
    const [circleScore, setCircleScore] = useState(0);
    const [winner, setWinner] = useState(null);
    const [turn, setTurn] = useState("cross");
    const msg = "Winner will be displayed here"

    useEffect(() => {
            const winCombo = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ]
    
            winCombo.forEach(array => {
                let circleWin = array.every(cell => cells[cell] === "circle");
    
                if(circleWin){
                    setWinner("Winner - Circle");
                    setCircleScore(circleScore + 1);
                    return;

                }
            })
    
            winCombo.forEach(array => {
                let crossWin = array.every(cell => cells[cell] === "cross");
                if(crossWin){
                    setWinner("Winner - Cross");
                    setCrossScore(crossScore + 1);
                    return;
                }
            })
    }, [cells])

    const handleClick = () => {
        setCells(["", "", "", "", "", "", "", "", ""]);
    }

    return (
        <div className='flex flex-col items-center justify-center'>
        <div className='h-14 w-40 border border-yellow flex justify-center items-center text-grey'>
        <span className='text-lg text-white mx2'>Cross-{crossScore} :</span> <span className='text-lg text-yellow mx-2'>Circle-{circleScore}</span>
        </div>
            <div className='text-lg text-white text-center m-8'>It's <span className='text-yellow'>{turn}'s</span> turn.</div>
            <div className='w-96 h-96 max-sm:h-80 max-sm:w-80 flex flex-wrap justify-center items-center'>
                {cells.map((cell, index) =>
                    <Cell
                        key={index}
                        id={index}
                        cell={cell}
                        setCells={setCells}
                        turn={turn}
                        setTurn={setTurn}
                        winner={winner}
                        cells={cells}
                    />
                )};
            </div>
            <div className='text-lg text-yellow text-center m-8'>{winner || msg}</div>
            <button className='bg-yellow text-white w-16 h-10 rounded-md flex justify-center items-center' onClick={handleClick}>Reset</button>
        </div>
    )
}

export default Gameboard
