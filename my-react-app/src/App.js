import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ProjectCarousel from './components/ProjectCarousel'; // Importing the ProjectCarousel component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>Welcome to My Portfolio</h1>
        <ProjectCarousel /> {/* Including the ProjectCarousel component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
