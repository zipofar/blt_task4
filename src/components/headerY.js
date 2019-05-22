import React from 'react';

export default (props) => {
  return(
    <div className="header-y">
      <ul>
        {Array(8).fill(0).map((_e, i) => (<li>{8 - i}</li>))}
      </ul>
    </div>
  );
}
