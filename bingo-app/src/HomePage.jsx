// HomePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [nameError, setNameError] = useState('');
  const [codeError, setCodeError] = useState('');
  const navigate = useNavigate();

  const validateInputs = () => {
    let isValid = true;

    if (name.length <= 4) {
      setNameError('Name must be greater than 4 characters.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!/\d/.test(code)) {
      setCodeError('Code must contain at least one number.');
      isValid = false;
    } else {
      setCodeError('');
    }

    return isValid;
  };

  const handlePlay = () => {
    if (validateInputs()) {
      navigate('/player_view');
    }
  };

  return (
    <div className="home-page">
      <img src="/path/to/bingo-image.png" alt="BINGO" className="bingo-image" />
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p className="error">{nameError}</p>}
      </div>

      <div className="input-group">
        <label htmlFor="code">Code</label>
        <input
          type="text"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        {codeError && <p className="error">{codeError}</p>}
      </div>

      <button className="play-button" onClick={handlePlay}>Play</button>
      <button className="host-button">Host</button>
    </div>
  );
};

export default HomePage;
