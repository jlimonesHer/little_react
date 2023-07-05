import React from "react";
import '../App.js'
import '../css/Head.css'

function Head({ img }) {
    return (
        <div className='container_logo'>
          <img className='logo'
            src={ img }
            alt='logo jlimones' />
      </div>
    )
};

export default Head