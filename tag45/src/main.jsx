import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blog from './pages/Blog';
import Detail from './pages/Detail';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Navbar /> 
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/blog/:detailid' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
