import React from 'react';

export default (props) => {
  const { cellId, coords: { x, y } } = props;
  const cellColor = getColor(x, y);
  const colorClass = `game-field__cell__color-${cellColor}`;
  return(
    <div
      className={`game-field__cell ${colorClass}`}
      x={x}
      y={y}
    />
  );
}

const isEven = (n) => (n % 2 === 0);
const isOdd = (n) => (n % 2 === 1);
const getColor = (x, y) => {
  if (isOdd(x) && isEven(y)) {
    return 'white';
  }
  if (isEven(x) && isOdd(y)) {
    return 'white';
  }
  if (isEven(x) && isEven(y)) {
    return 'black';
  }
  if (isOdd(x) && isOdd(y)) {
    return 'black';
  }
}
