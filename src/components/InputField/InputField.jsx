import React from 'react';
import './InputField.css';

const InputField = ({ label, placeholder, type = 'text' }) => (
  <div className="form-group">
    <label>
      <p className="label-text">{label}</p>
      <input 
        className="input-field"
        type={type}
        placeholder={placeholder}
      />
    </label>
  </div>
);

export default InputField; 