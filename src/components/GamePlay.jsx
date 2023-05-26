/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';
import { SPEED, getNextDieTime, getNextHungerTime, getNextPoopTime, getNextSleepTime } from '../constants';
import Penguin from './Penguin';

export const GamePlay = (props) => {
  const {action, setAction, gameOver, setGameOver} = props;

  const [status, setStatus] = useState('HATCHING');
  const [clock, setClock] = useState(1);
  const [hungerTime, setHungerTime] = useState(getNextHungerTime(clock));
  const [poopTime, setPoopTime] = useState(null);
  const [dieTime, setDieTime] = useState(null);
  const [sleepTime, setSleepTime] = useState(getNextSleepTime(clock));

  const feed = () => {
    setAction(null);
    setStatus('EATING')
    setDieTime(null);
    setHungerTime(getNextHungerTime(clock))
    setPoopTime(getNextPoopTime(clock));
    setSleepTime(getNextSleepTime(clock));
    setTimeout(() => {setStatus('IDLING')}, 4000);
    return;
  }

  const clean = () => {
    setAction(null);
    setHungerTime(getNextHungerTime(clock));
    setSleepTime(getNextSleepTime(clock));
    setDieTime(null);
    setStatus('CELEBRATING')
    setTimeout(() => {setStatus('IDLING')}, 2000);
    return;
  }

  const givePets = () => {
    if(status === 'POOPING' || status === 'HUNGRY' || status === 'SLEEPING') return;
    setAction(null);
    setSleepTime(getNextSleepTime(clock));
    setDieTime(null);
    setStatus('CELEBRATING')
    setTimeout(() => {setStatus('IDLING')}, 2000);
    return;
  }

  const sleep = () => {
    if(status !== 'HUNGRY' && status !== 'POOPING') {
      setStatus('SLEEPING')
    }
    return;
  }

  useEffect(() => {
    setTimeout(() => {
    setClock(clock+1)
    if(status === 'HATCHING') {setTimeout(() => setStatus('IDLING'), 3000)}
    if(clock === hungerTime && status !== 'POOPING') {setStatus('HUNGRY'); setDieTime(getNextDieTime(clock));}
    if(clock === poopTime && status !== 'HUNGRY') {setStatus('POOPING'); setDieTime(getNextDieTime(clock));}
    if(clock === sleepTime) {sleep()}
    if(clock === dieTime) {setStatus('DEAD'); setTimeout(() => setGameOver(!gameOver), 3000)}
    if(action === 'feed' && status === 'HUNGRY') {feed()}
    if(action === 'clean' && status === 'POOPING') {clean()}
    if(action === 'give-pets') {givePets()}
  }, SPEED)
// eslint-disable-next-line react-hooks/exhaustive-deps
},[clock]);

  return (
      <Penguin status={status}/>
  )
}
