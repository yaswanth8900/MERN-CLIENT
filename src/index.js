import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/nav';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    
    <Router>
      <Navbar />
      <h1>Welcome</h1><h2>Hello</h2>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </Router>
  </div>
);

