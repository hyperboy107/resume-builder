import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ResumeBuilder from './pages/ResumeBuilder';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-[#172554] via-black to-indigo-900">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/builder" element={<ResumeBuilder />} />
            </Routes>
          </AnimatePresence>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;