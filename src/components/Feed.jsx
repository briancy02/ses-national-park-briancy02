import React from 'react'
import './Feed.css'
import Block from './Block.jsx'



const Feed = (props) => {

  return (
    <div className="feed">
      <ul>

        {props.items.map((item) =>        
        <Block key={item.id} id={item.id} title={item.name} buttonEndPoint={props.buttonsEndPoint}/>)}
      </ul>

    </div>
    
  )
}

export default Feed