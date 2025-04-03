import { useEffect, useState } from "react";
import "./timer.scss";
import Image from "../Image/Image";
import timer from "../../assets/icons/timer.svg";

const Timer = ({ startTime = 600, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(1 * 10);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onComplete]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      <Image className="timer-icon" src={timer} />
      <div className="timer-number">
        {timeLeft > 0 ? formatTime(timeLeft) : "00:00"}
      </div>
    </div>
  );
};
export default Timer;
