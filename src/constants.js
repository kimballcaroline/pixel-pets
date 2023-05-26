export const CONTROLS = ['feed', 'clean', 'give-pets'];
export const SPEED = 1000;

export const getNextHungerTime = (clock) =>
  Math.floor(Math.random() * 3) + 15 + clock;

export const getNextDieTime = (clock) =>
  Math.floor(Math.random() * 2) + 15 + clock;

export const getNextPoopTime = (clock) =>
  Math.floor(Math.random() * 3) + 10 + clock;

export const getNextSleepTime = (clock) =>
Math.floor(Math.random() * 3) + 6 + clock;