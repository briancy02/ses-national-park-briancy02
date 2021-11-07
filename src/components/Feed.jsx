import React from 'react'
import './Feed.css'
import Block from './Block.jsx'

import {useState, useEffect} from 'react'



const Feed = (props) => {
  const req_url = 'https://developer.nps.gov/api/v1/'+ props.endpoint + '?api_key=' + import.meta.env.VITE_NATIONAL_PARK_KEY
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
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

  console.log(items)

  return (
    <div className="feed">
      <ul>

        {items.map((item) =>        
        <Block key={item.id} title={item.name}/>)}
      </ul>

    </div>
    
  )
}

export default Feed