import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import twitter from "../assets/socials/twitter.png";
import linkedin from "../assets/socials/linkedin.png";
import instagram from "../assets/socials/instagram.png";
import facebook from "../assets/socials/facebook.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content-conatiner">
          <div className="footer-logo">
            <img className="footer-logo-img" src={logo} />
            <h3 className="footer-logo-text">Digital Prints</h3>
          </div>
          <div className="footer-explore">
            <h3 className="footer-header">Explore</h3>
            <Link className="footer-link" to="/">Home</Link>
            <Link className="footer-link" to="/">Gallery</Link>
            <Link className="footer-link" to="/">About</Link>
            <Link className="footer-link" to="/">FAQ</Link>
          </div>
          <div className="footer-legal">
            <h3 className="footer-header">Legal</h3>
            <Link className="footer-link" to="/">Terms</Link>
            <Link className="footer-link" to="/">Privacy</Link>
          </div>
        </div>

        <hr className="line" />
        <div className="social-img-container">
          <Link to="/">
            <img src={twitter} className="social-img" />
          </Link>
          <Link to="/">
            <img src={linkedin} className="social-img" />
          </Link>
          <Link to="/">
            <img src={instagram} className="social-img" />
          </Link>
          <Link to="/">
            <img src={facebook} className="social-img" />
          </Link>
        </div>
        <div className="copyright-container">
          <p>© 2023 Digital Prints. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
