import React from 'react';
import './Activity.css';
import Header from './Header'
import Feed from './Feed'
import {
  useParams
} from 'react-router-dom';
import {useState, useEffect} from 'react'


function Activity(props) {
  const {id} = useParams();
  const req_url = 'https://developer.nps.gov/api/v1/'+ props.endpoint + '?' + 'id='+ id + '&api_key=' + import.meta.env.VITE_NATIONAL_PARK_KEY 
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  console.log(req_url)
  useEffect(() => {
    
    fetch(req_url, { method: 'GET' })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data[0].parks);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  
  console.log(id)
  console.log(items)
  return (
    <div>
      <Header />
      <Feed items={items} endpoint={props.endpoint} buttonsEndpoint={props.buttonsEndPoint}/>
    </div>
  );
}

export default Activity;