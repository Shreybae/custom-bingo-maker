// PlayerView.jsx
import React, { useState } from 'react';
import './PlayerView.css';

const PlayerView = () => {
  const [slots, setSlots] = useState([
    ['B1', 'B2', 'B3', 'B4', 'B5'],
    ['I1', 'I2', 'I3', 'I4', 'I5'],
    ['N1', 'N2', 'FREE', 'N4', 'N5'],
    ['G1', 'G2', 'G3', 'G4', 'G5'],
    ['O1', 'O2', 'O3', 'O4', 'O5']
  ]);

  const [code, setCode] = useState('12345');

  return (
    <div className="player-view">
      {/* Display Code */}
      <h1 className="code-display">Code: {code}</h1>

      {/* 5x5 Grid */}
      <div className="grid">
        {slots.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((slot, colIndex) => (
              <div key={colIndex} className="cell">
                {slot}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button className="edit-button">Edit</button>
        <button className="check-button">Check</button>
      </div>
    </div>
  );
};

export default PlayerView;
