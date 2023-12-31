import React from 'react'
import '../css/button.css';

function Button(props) {
  
  const is_operator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };
  
  return (
    <button className={`container_button ${is_operator(props.children) ? 'operator' : ''}`.trimEnd()}
    onClick={ () => props.manClick(props.children) }>
      { props.children }
    </button>
  )
}

export default Button