import React from 'react';
import './Button.css';

const Button = ({ children, onClick }) => {
  return (
    <button className="custom-btn" onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;