import { useState, useEffect } from "react";

const LiveTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="time">
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default LiveTime;
