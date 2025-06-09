import { useState, useEffect } from "react";

const LiveDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000); // Updates every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <p>{date.toDateString()}</p>
    </div>
  );
};

export default LiveDate;
