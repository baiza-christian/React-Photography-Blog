import React from 'react';
import './style.css'

/**
* @author
* @function Card
**/

// {props.children} passes data from children
const Card = (props) => {
  return(
    <div className="card" {...props}>
        {props.children}
    </div>
   )

 }

export default Card