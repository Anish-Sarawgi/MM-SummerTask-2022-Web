import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Squiggle from './Components/Squiggle';
import Footer from './Components/Footer';
import Card from './Components/Card';
import ArticlePage from './Components/ArticlePage';
import AdminPanel from './Components/AdminPanel';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="squiggle" element={<Squiggle/>} />
        <Route path="footer" element={<Footer/>} />
        <Route path="card" element={<Card/>} />
        <Route path="article-page" element={<ArticlePage/>} />
        <Route path="admin-panel" element={<AdminPanel/>} />
      </Routes>
      </>
  );
}

export default App;
