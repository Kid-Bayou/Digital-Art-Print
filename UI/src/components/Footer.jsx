import { Link} from "react-router-dom";
import twitter from "../assets/socials/twitter.png";
import linkedin from "../assets/socials/linkedin.png";
import instagram from "../assets/socials/instagram.png";
import facebook from "../assets/socials/facebook.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content-conatiner">
          <p>
            Welcome to Exam Portal, where knowledge meets opportunity. We strive
            to empower learners of all ages by providing a seamless platform for
            exams and assessments. Our commitment to excellence drives us to
            deliver a user-friendly experience that fosters growth and
            achievement. Trust in our secure and reliable system, dedicated to
            maintaining the confidentiality of your data. Join us on this
            educational journey, as we unlock doors to a brighter future
            together.
          </p>
        </div>

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
      </footer>
    </>
  );
}

export default Footer;
