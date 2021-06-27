import "./ContactDetails.css";
import "font-awesome/css/font-awesome.min.css";

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <div className="contact-detail">
        <i className="fa fa-envelope"></i>
        <p>
          <a href="mailto:sasank.tadepalli@icloud.com" target="_window">
            sasank.tadepalli@icloud.com
          </a>
        </p>
      </div>
      <div className="contact-detail">
        <i className="fa fa-map-marker"></i>
        <p>Vijayawada, India</p>
      </div>
      <div className="contact-detail">
        <i className="fa fa-github"></i>
        <p>
          <a href="https://github.com/Shannu26" target="_window">
            github.com/Shannu26
          </a>
        </p>
      </div>
      <div className="contact-detail">
        <i className="fa fa-mobile"></i>
        <p>9502974190</p>
      </div>
      <div className="contact-detail">
        <i className="fa fa-linkedin"></i>
        <p>
          <a
            href="https://www.linkedin.com/in/sasank-tadepalli/"
            target="_window"
          >
            linkedin.com/in/sasank-tadepalli
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
