import React from "react";
import './Button.css';

const Button = ({isOpen, toggleTiles}) => {
  return (
    <div onClick={toggleTiles} className='button-container'>
      <button className="expand-button">
        <span>{`Show ${isOpen ? 'less' : 'more'} categories`}</span>
      </button>
        <div className="arrow-container">
          <img className="arrow" src={`../../public/${isOpen ? 'up' : 'down'}.svg`}></img>
        </div>
    </div>
  )
}

export default Button;