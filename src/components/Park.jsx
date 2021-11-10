import React from 'react';
import './Park.css';
import Header from './Header'
import {
  useParams
} from 'react-router-dom';

function Park(props) {
  const {slug} = useParams();
  return (
    <div>
      <Header />
    </div>
  );
}

export default Park;