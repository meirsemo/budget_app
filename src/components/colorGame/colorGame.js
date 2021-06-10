import React, { useState } from 'react';
import './colorGame.css';

const colorGame = () => {
    const [numOfSquares, setNumOfSquares] = useState(6);
    const [easy, setEasy] = useState(false);
    const [hard, setHard] = useState(true);
   
    const [massage, setMassage] = useState('');
    // const [arrColor, setArrColor] = (createArr(numOfSquares));
    let arrColor  =  createArr(numOfSquares);    
    let  winColor = arrColor[Math.floor(Math.random() * arrColor.length)];

    const clickedEasy = () => {
        setEasy(true);
        setHard(false);
        changeLevel(3);
    }

    const clickedHard = () => {
        setHard(true);
        setEasy(false);
        changeLevel(6);
    }

    const clickedNewGame = () => {
        reset();
    }

    function changeLevel(num){
        setNumOfSquares(num);
    }      

    function pickColor () {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ', ' + g + ', ' + b + ")";
    } 
 
    function createArr(num) {
        const arr = [];
        for(let i = 0; i < num; i++){
            arr.push(pickColor());
        }
        return arr;
    }
    
    const checkIfWin = (color) => {
        console.log('checkIfWin', color);
        if(color === winColor){
            console.log('Win');
            setMassage('Win');
        }else {
            const index = arrColor.findIndex((el) => color === el);
            arrColor[index] = '#232323';
        }
    }
    const reset = () => {
        setNumOfSquares(6);
        arrColor = createArr(6);   
    }
    // reset();
    return (
        <div>
             <h1>
                THE GREAT<br/><span className='colorDisplay'>{winColor}</span><br/>GUESSING GAME
            </h1>
            <div className='strip'>
                <button className='reset' onClick={() => clickedNewGame()}>NEW COLORS</button>
                <span className="message">{massage}</span>
                <button className={easy ? 'easy selected' : 'esay' } onClick={() => clickedEasy()}>EASY</button>
                <button className={hard ? 'hard selected' : 'hard'} onClick={() => clickedHard()}>HARD</button>
            </div>
            <div className='board'>
                {arrColor.map((el) => (<div key={el} className='square' onClick={() => checkIfWin(el)} style={{background: el}}></div>))}
            </div>
        </div>
    )
}

export default colorGame;
