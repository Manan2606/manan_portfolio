import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cwwnzfp", "template_7wofee8", form.current, {
        publicKey: "mJuS5zZZ4UBV8dyj0",
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
          form.current.reset(); // Reset form fields after successful submission
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <button type="submit">Send</button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default ContactForm;
