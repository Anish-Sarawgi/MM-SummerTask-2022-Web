import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import ArticlePage from './Components/ArticlePage';
import AdminPanel from './Components/AdminPanel';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="article-page" element={<ArticlePage/>} />
        <Route path="admin-panel" element={<AdminPanel/>} />
      </Routes>
      </>
  );
}

export default App;
