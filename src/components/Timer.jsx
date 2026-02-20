import { useEffect, useState } from "react";

const TOTAL_TIME = 60 * 60; 

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  const progress = 1 - timeLeft / TOTAL_TIME;
  const degrees = progress * 360;

  return (
    <div className="timer-container">
      <div
        className="timer-circle"
        style={{
          background: `conic-gradient(#61D59B ${degrees}deg, #B1F0DC ${degrees}deg)`
        }}
      />

      <div className="timer-text">
        <span>Срок действия</span>
        <strong>{formatTime(timeLeft)}</strong>
      </div>
    </div>
  );
}

