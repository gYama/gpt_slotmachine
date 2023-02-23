import React, { useState } from 'react';
import './App.css';

const SlotMachine = () => {
  const [slotValues, setSlotValues] = useState(['🍒', '🍊', '🍋']);
  const [spinCounter, setSpinCounter] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    setSpinning(true);
    setSpinCounter(spinCounter + 1);

    // Simulate a spinning slot machine by changing the slot values every 100ms
    const intervalId = setInterval(() => {
      setSlotValues([
        getRandomSlotValue(),
        getRandomSlotValue(),
        getRandomSlotValue(),
      ]);
    }, 100);

    // After 3 seconds, stop the slot machine and check for a win
    setTimeout(() => {
      clearInterval(intervalId);
      setSpinning(false);
      checkWin();
    }, 3000);
  };

  const getRandomSlotValue = () => {
    const slotValues = ['🍒', '🍊', '🍋'];
    const randomIndex = Math.floor(Math.random() * slotValues.length);
    return slotValues[randomIndex];
  };

  const checkWin = () => {
    if (slotValues[0] === slotValues[1] && slotValues[1] === slotValues[2]) {
      alert('You win!');
    }
  };

  return (
    <div className="slot-machine">
      <h1>Slot Machine</h1>
      <div className="slot-container">
        <div className="slot">
          <p>{slotValues[0]}</p>
        </div>
        <div className="slot">
          <p>{slotValues[1]}</p>
        </div>
        <div className="slot">
          <p>{slotValues[2]}</p>
        </div>
      </div>
      <div className="button-container">
        <button
          className="button"
          onClick={handleSpin}
          disabled={spinning}
        >
          {spinning ? 'Spinning...' : 'Spin'}
        </button>
        <p>Spins: {spinCounter}</p>
      </div>
    </div>
  );
};

export default SlotMachine;
