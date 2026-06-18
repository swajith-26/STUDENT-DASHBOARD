import { useEffect, useRef, useState } from "react";

function FocusTimer() {
  const [seconds, setSeconds] = useState(0);

  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  useEffect(() => {
    return () => stopTimer();
  }, []);

  return (
    <div className="card">
      <h2>Focus Timer</h2>

      <h3>{seconds} Seconds</h3>

      <button onClick={startTimer}>Start</button>

      <button onClick={stopTimer}>Stop</button>

      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default FocusTimer;