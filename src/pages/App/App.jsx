import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/Authpage';
import HomePage from '../HomePage/HomePage';
import ServicesPage from '../ServicesPage/ServicesPage';





export default function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
      {user ?
      <>
      <NavBar />
      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/services" element= {<ServicesPage />} />
      </Routes>
      </>
      :
      <AuthPage />
       
      }
    </main>
  );
}


