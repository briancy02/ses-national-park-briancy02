import React from 'react';
import './Park.css';
import Header from './Header'
import {
  useParams
} from 'react-router-dom';
import {useState, useEffect} from 'react'

function Park(props) {
  const {id} = useParams();
  const req_url = 'https://developer.nps.gov/api/v1/'+ props.endpoint + '?' + 'id='+ id + '&api_key=' + import.meta.env.VITE_NATIONAL_PARK_KEY 
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

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
          setData(result.data[0]);
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
      <p> {data} </p>
    </div>
  );
}

export default Park;