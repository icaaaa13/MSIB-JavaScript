import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import Team from './pages/Team';
import Contact from './pages/Contact';
import AuthLogin from './pages/Auth_login';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<AuthLogin isRegister={false} />} />
        <Route path="/register" element={<AuthLogin isRegister={true} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;