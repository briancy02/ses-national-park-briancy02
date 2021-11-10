import React from 'react';
import './Home.css';
import Header from './Header'
import Feed from './Feed'
import {useState, useEffect} from 'react'


function Home(props) {
  const req_url = 'https://developer.nps.gov/api/v1/'+ props.endpoint + '?' + props.query + '&api_key=' + import.meta.env.VITE_NATIONAL_PARK_KEY 
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
          setItems(result.data);
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
  
  return (
    <div>
      <Header />
      <Feed items={items} endpoint={props.endpoint} buttonsEndPoint={props.buttonsEndPoint} query=''/>
    </div>
  );
}

export default Home;