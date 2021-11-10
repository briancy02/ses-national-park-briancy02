import React from 'react';
import './Activity.css';
import Header from './Header'
import Feed from './Feed'
import {
  useParams
} from 'react-router-dom';


function Activity(props) {
  const {id} = useParams();
  console.log(id)
  return (
    <div>
      <Header />
      <p> {props.id} </p>
    </div>
  );
}

export default Activity;