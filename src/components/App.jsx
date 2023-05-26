/* eslint-disable no-unused-vars */
import {useState, useRef, useEffect} from 'react';
import '../stylesheets/App.scss';
import { Buttons } from './Buttons';
import { Controls } from './Controls';
import { Modal } from './Modal';
import { GameOver } from './GameOver';
import { GamePlay } from './GamePlay';

const App = () => {
  const [gameStart, setStart] = useState(false);
  const [move, setMove] = useState(0);
  const [action, setAction] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if(gameOver){
      setStart(false);
     }
  }, [gameOver])


  return (
    <div className="app">
      <Modal />
      <div className="frame">
        {!gameOver && gameStart && (<Controls move={move}/>)}
        {gameOver && (<GameOver />)}
        {gameStart && <GamePlay action={action} setAction={setAction} gameOver={gameOver} setGameOver={setGameOver} setStart={setStart}/>}
      </div>
      <Buttons move={move} setMove={setMove} setAction={setAction} start={gameStart} setStart={setStart} setGameOver={setGameOver} />
    </div>
  )
}

export default App;
