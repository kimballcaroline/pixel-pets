/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import '../stylesheets/Buttons.scss';
import { CONTROLS } from '../constants';

export const Buttons = (props) => {
  const {move, setMove, setAction, start, setStart, setGameOver} = props;

  const handleClick = (event) => {
    let controlId =1;
    const {id} = event.target;
    if(id === 'left') {
      controlId =(move + 2) % CONTROLS.length;
      setMove(controlId);
    } else if(id === 'right') {
      controlId = (1 + move) % CONTROLS.length;
      setMove(controlId);
    } else if(id === 'middle') {
      if(!start) {console.log('start!'); setStart(true); setGameOver(false)} 
      else {setAction(CONTROLS[move]);}
    }

  }

  return (
    <div className="buttons-wrapper">
      <div className="buttons">
        <div className="btn" onClick={handleClick} id="left"></div>
        <div className="btn" onClick={handleClick} id="middle"></div>
        <div className="btn" onClick={handleClick} id="right"></div>
      </div>
    </div>
  )
}
