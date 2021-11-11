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
        <Route path="/" element={<Home endpoint="activities" buttonsEndPoint="activity"/>} />
        <Route path="activity/:id" element={<Activity endpoint="activities/parks" buttonsEndPoint="parks"/>} />
        <Route path="park/:id" element={<Park endpoint="parks"/>} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

