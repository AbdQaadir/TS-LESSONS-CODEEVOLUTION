import React, { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const stopTimer = () => {
    intervalRef.current && window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      HookTimer - {timer} -{" "}
      <button onClick={() => stopTimer()}>Stop TImer</button>
    </div>
  );
};

export default MutableRef;
