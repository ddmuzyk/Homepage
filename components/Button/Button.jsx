import React from "react";
import './Button.css';

const Button = ({isOpen}) => {
  return (
    <div className='button-container'>
      <button className="expand-button">
        <span>Show more categories</span>
      </button>
        <div className="arrow-container">
          <img className="arrow" src={`../../public/${isOpen ? 'up' : 'down'}.svg`}></img>
        </div>
    </div>
  )
}

export default Button;