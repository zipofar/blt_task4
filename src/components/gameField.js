import React from 'react';
import _ from 'lodash';
import './gameField.css';
import Cell from './cell';
import HeaderX from './headerX';
import HeaderY from './headerY';

/*
 * Coords
 *   X coords: xDigit-xLetter
 *   1-A 2-B 3-C 4-D 5-E 6-F 7-G 8-H
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 * 8
 */

export default class GameField extends React.Component {
  static defaultProps = { xCoords: ['a', 'b', 'c' , 'd', 'e', 'f', 'g', 'h'] }

  buildField () {
    const { xCoords } = this.props;
    const sideSize = xCoords.length;
    return(
      xCoords.map((_e, i) => {
        const numRow = sideSize - i;
        return(
          <div
            key={`row-${numRow}`}
            className="game-field__row"
          >
            {this.buildRow(numRow, sideSize, xCoords)}
          </div>
        );
      })
    );
  }

  buildRow (numRow, sideSize, xCoords) {
    return(
      xCoords.map((letter, i) => {
        const coords = { x: i + 1, xLetter: letter, y: numRow };
        const cellId = `${letter}${numRow}`;
        const props = { cellId, coords };
        return <Cell key={cellId} { ...props } />;
      })
    );
  }

  render() {
    const { xCoords } = this.props;
    const digitHeaders = xCoords.map((_e, i) => (xCoords.length - i));
    return (
      <div className="chess-desk">
        <HeaderX position="top" headers={xCoords}/>
        <HeaderX position="bottom" headers={xCoords}/>
        <HeaderY position="left" headers={digitHeaders}/>
        <HeaderY position="right" headers={digitHeaders}/>
        <div className="game-field">
          {this.buildField()}
        </div>
      </div>
    );
  }
}
