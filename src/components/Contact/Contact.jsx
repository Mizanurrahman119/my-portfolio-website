import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const notify = () => toast("Successfully sgitent a message");

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('service_72k79vd', 'template_np14g78', form.current, 'aEWtahicVVjDfDUzf')
      .then((result) => {
           console.log(result.text)
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__optiens">
          <artical className="contact__optien">
            <MdOutlineEmail className="contact__optien-icon" />
            <h4>Email</h4>
            <h5>niloy719119@gmail.com</h5>
            <a href="mailto:niloy719119@gmail.com" target="blank">
              Sent a Massage
            </a>
          </artical>

          <artical className="contact__optien">
            <RiMessengerLine className="contact__optien-icon" />
            <h4>Messenger</h4>
            <h5>mizanurrahman.719</h5>
            <a
              href="https://web.facebook.com/mizanurrahman.719?_rdc=1&_rdr"
              target="blank"
            >
              Sent a Massage
            </a>
          </artical>

          <artical className="contact__optien">
            <BsWhatsapp className="contact__optien-icon" />
            <h4>WhatsApp</h4>
            <h5>01706719119</h5>
            <a
              href="https://api.whatsapp.com/sens?phone01706719119"
              target="blank"
            >
              Sent a Massage
            </a>
          </artical>
        </div>
        {/* END OF CONTACT OPTIENS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Massage"
            required
          ></textarea>
          <button onClick={notify} type="submit" className="btn btn-primary">
            Sent Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
