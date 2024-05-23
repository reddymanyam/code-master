import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <h1>Welcome to Code Master App!</h1>
      <p>Explore coding challenges, participate in contests, and compare your results with others on the leaderboard.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/explore" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Explore Challenges</Link>
        <Link to="/contest" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Join a Contest</Link>
        <Link to="/leaderboard" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#17a2b8', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>View Leaderboard</Link>
      </div>
    </div>
  );
};

export default Home;
 