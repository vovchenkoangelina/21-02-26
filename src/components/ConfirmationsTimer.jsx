import { useEffect, useState } from "react";

const TOTAL_CONFIRMATIONS = 19; 

export default function ConfirmationsTimer() {
  const [confirmed, setConfirmed] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setConfirmed((prev) => {
        if (prev >= TOTAL_CONFIRMATIONS) {
          clearInterval(interval);
          return TOTAL_CONFIRMATIONS;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const progress = (confirmed / TOTAL_CONFIRMATIONS) * 360;

  return (
    <div className="timer-container">
      <div
        className="timer-circle"
        style={{
          background: `conic-gradient(#61D59B ${progress}deg, #B1F0DC ${progress}deg)`
        }}
      />

      <div className="timer-text">
        <div className="confirmation-label">
  <span>Подтверждения</span>
  <span className="help">ⓘ</span>
</div>
        <strong>{confirmed} из {TOTAL_CONFIRMATIONS}</strong>
      </div>
    </div>
  );
}