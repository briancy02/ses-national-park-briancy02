import React from 'react';
import './Home.css';
import Header from './Header'
import Feed from './Feed'


function Home(props) {
  return (
    <div>
      <Header />
      <Feed endpoint="activities" />
    </div>
  );
}

export default Home;