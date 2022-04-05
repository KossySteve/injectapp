import React from 'react'
import './Button.scss';


function Button({title,className }) {
  return (
    <button  className={`button ${className}`}>
      {title}
    </button>
  )
}

export default Button;
