//import whatever is needed
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMe from './components/AboutMe';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
