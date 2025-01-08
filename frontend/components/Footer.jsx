import React from 'react';
import "./FooterStyles.css";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div id="footer">
        <p>limited access</p>
        <p><Link id="link-home" to="/">dreamcore.us</Link></p>
    </div>
  )
}

export default Footer;