import React from "react";
import '../App.js'

function Head({ img }) {
    return (
        <div className='container_logo'>
        <img className='img_logo'
          src={ img }
          alt='logo jlimones' />
      </div>
    )
};

export default Head