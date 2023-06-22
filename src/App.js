import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About';
import Projects from './components/Projects'; 
import Resume from './components/Resume';
import { BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid navbar-container">
            {/* My name */}
            <NavLink className="navbar-brand" to="/" activeClassName="nav-link-active">Daniel Ha</NavLink>

            {/* Navbar menu */}
            <div className="ms-auto navbar-scroll">
              <div className="navbar-scrollable">
                <ul className="navbar-nav">
                  <li className="nav-item nav-item-space">
                    <NavLink className="nav-link" to="/" activeClassName="nav-link-active">About</NavLink>
                  </li>
                  <li className="nav-item nav-item-space">
                    <NavLink className="nav-link" to="/projects" activeClassName="nav-link-active">Projects</NavLink>
                  </li>
                  <li className="nav-item nav-item-space">
                    <NavLink className="nav-link" to="/resume" activeClassName="nav-link-active">Resume</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content area */}
        <div className="main-content">
          {/* Routing logic */}
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
