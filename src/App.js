import './App.css';
import Explore from './components/Explore';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Problems from './components/Problems';
import Contest from './components/Contest';
import LeaderBoard from './components/LeaderBoard';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  const contest = {
    name: 'Global Code Challenge',
    description: 'Compete with top coders from around the world.',
    date: '2024-06-25T14:00:00', 
    link: 'https://www.example.com/register'
  };

  return (
    
    <div>
    <Navbar />   
        <Routes>
         <Route  path='/explore' element={<Explore />} />
         <Route  path='/problems' element={<Problems problem />} />
         <Route path='/contest' element={<Contest contest={contest}/>} />
         <Route path='/leaderboard' element={<LeaderBoard />} />
         <Route path='/register' element={<Register />} />
         <Route path='/login' element={<Login />} />
        </Routes>
      
    </div>
  );
}

export default App;
