import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import AuthPage from '../AuthPage/Authpage';
import HomePage from '../HomePage/HomePage';




export default function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
      {user ?
      <Routes>
        <Route path="/" element= {<HomePage />} />

      </Routes>
      :
      <AuthPage />
       
      }
    </main>
  );
}


