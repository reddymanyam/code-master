import './App.css';
import Explore from './components/Explore';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Problems from './components/Problems';
import Contest from './components/Contest';
import LeaderBoard from './components/LeaderBoard';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import CodeEditor from './components/CodeEditor';
import Profile from './components/Profile';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const contest = {
    name: 'Global Code Challenge',
    description: 'Compete with top coders from around the world.',
    date: '2024-06-25T14:00:00',
    link: 'https://www.example.com/register',
  };

  const login = (user) => {
    setUser(user);
    navigate('/profile');
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <div>
      <Navbar user={user} onLogout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/problems" element={<Problems problem />} />
        <Route path="/contest" element={<Contest contest={contest} />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/profile" element={user ? <Profile user={user} /> : <Login onLogin={login} />} />
        <Route path="/codeeditor" element={<CodeEditor />} />
      </Routes>
    </div>
  );
}

export default App;
