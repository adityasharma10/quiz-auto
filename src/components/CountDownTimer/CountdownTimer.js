// src/components/CountdownTimer.js
import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        clearInterval(timer);
        alert('Time has elapsed!');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="countdown-timer">
      Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default CountdownTimer;
