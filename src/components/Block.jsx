import React from 'react'
import './Block.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link, Routes, Route} from 'react-router-dom'
import Activity from './Activity.jsx'
import {
  // rest of the elements/components imported remain same
  useParams
} from 'react-router-dom';

const Block = (props) => {
  console.log(props.buttonEndPoint + "/" + props.id)
  return (
    <div className="card">
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
        
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Link to={props.buttonEndPoint + "/" + props.id}>
              <Button variant="primary">Go</Button>
            </Link>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Block