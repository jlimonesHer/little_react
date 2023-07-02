import React from 'react'

function Button(props) {
  
  const is_operator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };
  
  return (
    <div className={`container_button${is_operator(props.children) ? '_operator' : ''}`}>
      { props.children }
    </div>
  )
}

export default Button