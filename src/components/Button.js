import React from 'react'
import PropTyps from 'prop-types'



const Button = (props) => {
   
  return (
    <div>
     <button 
     className='btn' style={{backgroundColor:props.color}} onClick={props.onClick}>{props.text}</button>
     </div>
  )
}
Button.defaultProps={
    color:'steelblue',
    text:"Hello"
}

Button.prototypes={
    text:PropTyps.string,
    color:PropTyps.string,
    onClick:PropTyps.func
}
export default Button
