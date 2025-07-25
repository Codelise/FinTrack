import React from 'react';
import './CheckBox.css';

const CheckBox = ({ label }) => (
    <div className="form-remember">
        <p className="remember-text">{label}</p>
        <input type="checkbox" className="checkbox" />
    </div>
);

export default CheckBox;