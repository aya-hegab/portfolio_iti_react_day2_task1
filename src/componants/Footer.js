// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer>
      <div className="left-box-2">
        <h3>GET IN TOUCH</h3>
        <div>
          <a href="ww" className="email">
            {/* <i className="fa-regular fa-envelope"></i> */}
            {/* <i className="fa fa-spinner fa-spin">no spinner but why</i> */}
            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            {/* <i className="fa-brands fa-facebook"></i> */}
            <FontAwesomeIcon icon={faEnvelope} /> kr12@hotmail.com
          </a>
          <a href="ww" className="num">
            <FontAwesomeIcon icon={faAddressCard} /> 717-555-1234
          </a>
        </div>
      </div>

      <div className="mid-box-2">
        <button>CONTACT ME</button>
      </div>
      <div className="right-box-2">
        <div>
          <a href="ww">
            <FontAwesomeIcon icon={faLinkedin} />
            {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
          </a>
          <a href="ww">
            <FontAwesomeIcon icon={faFacebookF} />
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
          </a>
          <a href="ww">
            <FontAwesomeIcon icon={faTwitter} />
            {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
          </a>
        </div>
        <p>Copyright &copy;2019 KR</p>
      </div>
    </footer>
  );
}
export default Footer;
