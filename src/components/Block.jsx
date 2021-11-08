import React from 'react'
import './Block.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Block = (props) => {
  return (
    <div className="card">
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
        
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Button variant="primary">Go</Button>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Block