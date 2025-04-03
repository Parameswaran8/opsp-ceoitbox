import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OPSPForm from './components/OPSPForm';
import SubmissionPage from './components/SubmissionPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<OPSPForm />} />
          <Route path="/submission" element={<SubmissionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;