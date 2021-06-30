import "./ContactMe.css";
import emailJS from "emailjs-com";
import ContactDetails from "../ContactDetails/ContactDetails";
import { useRef } from "react";
require("dotenv").config();

const ContactMe = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  emailJS.init(process.env.REACT_APP_EMAIL_INIT_ID);

  const sendEmail = () => {
    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      subjectRef.current.value === "" ||
      messageRef.current.value === ""
    ) {
      alert("All Fields are required");
      return;
    }

    // alert(process.env.REACT_APP_EMAIL_SERVICE_ID);
    emailJS
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        {
          from_name: nameRef.current.value,
          subject: subjectRef.current.value,
          to_name: "Sasank Tadepalli",
          email: emailRef.current.value,
          message: messageRef.current.value,
        }
      )
      .then((res) => {
        alert("Email has been sent.");
      })
      .catch((err) => {
        alert(err.text);
      });
    nameRef.current.value = "";
    emailRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <div className="contact-me">
      <h1>Contact Me</h1>
      <div className="container">
        <div className="left">
          <input type="text" placeholder="Name" ref={nameRef} />
          <input type="email" placeholder="Email" ref={emailRef} />
          <input type="text" placeholder="Subject" ref={subjectRef} />
          <textarea placeholder="Message" ref={messageRef}></textarea>
          <button onClick={sendEmail}>Send Message</button>
        </div>
        <div className="right">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
