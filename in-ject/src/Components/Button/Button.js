import React from 'react'
import './Button.scss';


function Button({title}) {
  return (
    <button  className='button'>
      {title}
    </button>
  )
}

export default Button;
