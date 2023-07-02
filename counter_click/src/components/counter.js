import React from "react";
import '../css/counter.css'

function Counter({ numClicks }) {
  return (
    <div className='counter'>
      {numClicks}
    </div>
  )
}

export default Counter