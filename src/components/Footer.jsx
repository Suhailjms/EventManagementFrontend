// Footer.jsx
import '../assets/css/Footer.css'; // Import the CSS file for styling
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Created by <a className="yo">EventHub</a> | 2024 </p>
      <div className="footer-social">
        <a className="footer-social-link" href="https://instagram" target="__blank">
        <SlSocialInstagram />

        </a>
        <a className="footer-social-link" href="https://twitter" target="__blank">
        <FaTwitter />
        </a>
        <a className="footer-social-link" href="https://Linkedij" target="__blank">
        <FaLinkedin />
        </a>
        <a className="footer-social-link" href="https://www.linkedin.com/in/hannah-luebbering-99609818a/" target="__blank">
        <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
