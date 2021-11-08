import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home.jsx'
import Activity from './components/Activity.jsx'
import Park from './components/Park.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/park" element={<Park />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

