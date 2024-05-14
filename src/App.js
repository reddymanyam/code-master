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
  return (
    
    <div>
    <Navbar />   
        <Routes>
         <Route  path='/explore' element={<Explore />} />
         <Route  path='/problems' element={<Problems />} />
         <Route path='/contest' element={<Contest />} />
         <Route path='/leaderboard' element={<LeaderBoard />} />
         <Route path='/register' element={<Register />} />
         <Route path='/login' element={<Login />} />
        </Routes>
      
    </div>
  );
}

export default App;
