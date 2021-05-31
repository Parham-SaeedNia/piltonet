import React from "react";
const ContactUs = () => {
  return (
    <>
      <div id="5" className="titles-container">
        <span> ارتباط با ما </span>
      </div>
      <div className="contactUs-container">
        <a href="#">
          <img
            className="contact-us-social-icons"
            src="/images/contact-us-linkedin.svg"
            alt="linkedin"
          />
        </a>

        <a href="#">
          <img
            className="contact-us-social-icons"
            src="/images/contact-us-twitter.svg"
            alt="twitter"
          />
        </a>
        <a href="#">
          <img
            className="contact-us-social-icons"
            src="/images/contact-us-mail.svg"
            alt="mail"
          />
        </a>
        <a href="#">
          <img
            className="contact-us-social-icons"
            src="/images/contact-us-instagram.svg"
            alt="instagram"
          />
        </a>
      </div>
    </>
  );
};

export default ContactUs;
