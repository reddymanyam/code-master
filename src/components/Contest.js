import React, { useState, useEffect } from 'react';

const Contest = ({ contest }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const contestDate = new Date(contest.date);
      const difference = contestDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (difference < 0) {
        clearInterval(timer);
        setTimeLeft("The contest has started!");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [contest.date]);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>{contest.name}</h1>
      <p>{contest.description}</p>
      <h2>Starts in: {timeLeft}</h2>
      <a href={contest.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue' }}>
        Participate
      </a>
    </div>
  );
};

export default Contest;
