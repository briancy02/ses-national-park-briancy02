import React from 'react'
import './Feed.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react'
const Feed = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [activities, setActivities] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    
    fetch('https://developer.nps.gov/api/v1/activities?api_key={import.meta.env.VITE_APP_NATIONAL_PARK_KEY}', { method: 'GET' })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setActivities(result.data)
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

  console.log(import.meta.env.VITE_NATIONAL_PARK_KEY)

  return (
    <div className="feed">
      <ul>

        {activities.map((activity) =>        
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
        
          <Card.Body>
            <Card.Title>{activity.name}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content
            {error}{isLoaded}{items.total}
            

            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>)}
      </ul>

    </div>
    
  )
}

export default Feed