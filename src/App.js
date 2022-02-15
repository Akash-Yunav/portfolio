// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/navbar.js';
import Home from './home/home.js';
import Resume from './resume/resume.js'


// import Home from './home/home.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
          <Routes>
            
              {/* <Route path="/results/"> */}
                Hello
              {/* </Route>  */}
          
              {/* <Route path="/home/">  */}
              <Route path="/" element={<Resume />} />
              {/* </Route> */}
              <Route path="/resume" element={<Home/>} />
          
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
