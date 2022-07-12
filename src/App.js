import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import ArticlePage from './Components/ArticlePage';
import AdminPanel from './Components/AdminPanel';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="article-page" element={<ArticlePage/>} />
        <Route path="admin-panel" element={<AdminPanel/>} />
        <Route path="dashboard" element={<Dashboard/>} />
      </Routes>
      </>
  );
}

export default App;
