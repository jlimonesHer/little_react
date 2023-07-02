import React from "react";
import '../css/button.css';



function Button1({texto, is_click, manClick}) {
    return (
        <button 
            className={is_click ? 'button_click' : 'button_reset' }
            onClick={manClick}>
            {texto}
        </button>
    );
}

export default Button1;