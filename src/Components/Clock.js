import { useState, useEffect } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setCurrentTime(newTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return <div>{currentTime}</div>;
};

export default Clock;
