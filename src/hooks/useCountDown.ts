import { useCallback, useEffect, useRef, useState } from "react";

const useCountDown = (seconds: number) => {
  const [timeLeft, settimeLeft] = useState(seconds);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCountdown = useCallback(() => {
    intervalRef.current = setInterval(() => {
      settimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, [settimeLeft]);

  const resetCountdown = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    settimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (!timeLeft && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [timeLeft, intervalRef]);

  return { timeLeft, startCountdown, resetCountdown };
};

export default useCountDown;
