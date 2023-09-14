import React from "react";
import './Button.css';

const Button = ({isOpen, setIsOpen}) => {
  return (
    <div onClick={() => {
      setIsOpen(!isOpen);
    }} className='button-container'>
      <button className="expand-button">
        <span>Show {isOpen ? 'less' : 'more'} categories</span>
      </button>
        <div className="arrow-container">
          <img className="arrow" src={`../../public/${isOpen ? 'up' : 'down'}.svg`}></img>
        </div>
    </div>
  )
}

export default Button;