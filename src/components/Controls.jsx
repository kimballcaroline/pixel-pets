/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import '../stylesheets/Controls.scss';
import {useEffect} from 'react';
import Tooltip from '@mui/material/Tooltip';
import FishIcon from '../assets/icons/icon_fish.png';
import HeartIcon from '../assets/icons/icon_heart.png';
import PoopIcon from '../assets/icons/icon_poop.png';

export const Controls = (props) => {

  const {move} = props;

  return (
    <div className="controls">
      <Tooltip title="Feed" arrow><img src={FishIcon} className="control-icon" id={move === 0 ? 'active' : null} /></Tooltip>
      <Tooltip title="Clean" arrow><img src={PoopIcon} className="control-icon" id={move === 1 ? 'active' : null} /></Tooltip>
      <Tooltip title="Give Pets" arrow><img src={HeartIcon} className="control-icon" id={move === 2 ? 'active' : null}/></Tooltip>
    </div>
  )
}
