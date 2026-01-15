import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wfwm9nj",
        "template_7qw7ghh",
        form.current,
        "9-FrRj1YMcGW4Ccg1"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contact-page my-auto">
        <div className="row container contact">
          <h1 className="text-center bg-transparent">
            I'd love to hear from you.
          </h1>
          {/* contact information */}
          <div className="col-sm-12 col-md-5 info container g-3 p-5 rounded-3">
            <h5 className="text-center">
              Drop me a message and let's have a little chat.
            </h5>
            <p>
              For any sort of question, feel free to send me an email or just If
              you want to say hi, I'll try my best to get back to you!
            </p>
            <hr />
            <h5>Personal Information</h5>

            <li>
              <i className="bi bi-envelope mx-3"></i>
              <span>Dantecalcantarajr@gmail.com</span>
            </li>
            <li>
              <i className="bi bi-telephone mx-3"></i>
              <span>+63 9277336452</span>
            </li>
            <li>
              <i className="bi bi-geo-alt mx-3"></i>
              <span>Fairview Quezon City PH</span>
            </li>
          </div>

          {/* contact form */}
          <div className="col-sm-12 col-md-6 rounded-3 g-3 container p-5">
            <form
              className="contactForm  p-1 mx-auto"
              ref={form}
              onSubmit={sendEmail}
            >
              <label>Name</label>
              <input
                className="inputContactform form-control"
                type="text"
                name="user_name"
              />
              <label className="">Email</label>
              <input className="form-control" type="email" name="user_email" />
              <label>Message</label>
              <textarea
                className="contactTextarea form-control"
                name="message"
              />
              <input
                className="btn btn-dark mt-2 w-100"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Contact;
