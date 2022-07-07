import React from 'react';
import './Footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {GrTwitter} from 'react-icons/gr';

const Footer = () => {
    return (
        <footer>
          <a href="https://web.facebook.com/Coders-BD-107189195249271" className="footer__logo" target="blank">Coders BD</a>

          <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Trstimonial</a></li>
            <li><a href="#trstimonial">Home</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="footer__socials">
            <a href="https://web.facebook.com/mizanurrahman.719" target='blank'><FaFacebookF/></a>
            <a href="https://www.instagram.com/mizanur719119/" target='blank'><FaInstagram/></a>
            <a href="https://twitter.com/MRMizan36032748" target='blank'><GrTwitter/></a>
          </div>
          <div className="coppyright">
             <small>&copy; Coders BD . All rights reserved</small>  
          </div>
        </footer>
    );
};

export default Footer;