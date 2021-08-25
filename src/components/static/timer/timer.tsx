import React, { useEffect, useState } from 'react';
import { timerProps } from './timer.props';


const Timer: React.FC<timerProps> = ({ initialSeconds, totalSeconds, onChange, interval }) => {
  const [ elapsed, setElapsed ] = useState(0);
  const [ intervalId, setIntervalId ] = useState<number | undefined>();

  useEffect(() => {
    let localCounter = initialSeconds;
    const newIntervalId = window.setInterval(() => {
      if (localCounter + initialSeconds === totalSeconds) return;

      localCounter += 1;
      setElapsed((elapsed: number) => {
        return elapsed + 1;
      });
    }, interval);
    setIntervalId(newIntervalId);

    return () => {
      window.clearInterval(intervalId);
      window.clearInterval(newIntervalId);
    };
  }, []);

  useEffect(() => {
    onChange?.(elapsed);
  }, [elapsed]);

  return null;
};

export default Timer;
