import React from 'react';
import './SocialLoginButton.css';

const SocialLoginButton = ({ text }) => (
<>
    <button className="social-button-google">
       <img className="social-icons" src={require('../../assets/google.png')} />
        {text || 'Google'}
    </button>

    <button className="social-button-facebook">
       <img className="social-icons" src={require('../../assets/facebook.png')} />
        {text || 'Facebook'}
    </button>
</> 
);

export default SocialLoginButton;