
import React from 'react';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/gorjeo.png';

const Footer = () => {
    return (
        <footer>
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
        </footer>
    );
};

export default Footer;
    