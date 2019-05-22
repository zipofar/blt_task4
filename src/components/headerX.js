import React from 'react';

export default (props) => {
  const xCoords = ['a', 'b', 'c' , 'd', 'e', 'f', 'g', 'h'];
  return(
    <div className="chess-desk__header-x">
        {xCoords.map((letter) => (<div className="chess-desk__header-x__letter">{letter}</div>))}
    </div>
  );
}
