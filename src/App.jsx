import React from 'react';
import './App.css';
import Header from './components/Header'
import Feed from './components/Feed'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
      <Feed endpoint="activities"/>
    </div>
  );
}

export default App;