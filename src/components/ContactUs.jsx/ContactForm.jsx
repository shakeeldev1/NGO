import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const ContactForm = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      toast.error("Please fill all required fields!");
      return;
    }

    const currentLocalTime = new Date().toLocaleString();

    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
      time: currentLocalTime,
    };

    emailjs
      .send(
        "service_yte2da5",
        "template_9q9fha7",
        templateParams,
        "Vh9vlbM6e30vO8W4m"
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="bg-[#f8faf8] py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-3">

        <div className="rounded-2xl bg-white p-8 shadow-md lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Send Us a Message
          </h2>

          <div className="mt-2 mb-8 h-1 w-12 rounded bg-green-600"></div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                className="rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                className="rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
              />
            </div>

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message *"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            ></textarea>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Send Message
              <FaPaperPlane size={14} />
            </button>
          </form>
        </div>

      
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">
            Contact Information
          </h2>

          <div className="mt-2 mb-8 h-1 w-12 rounded bg-green-600"></div>

          <div className="space-y-8">

            <div className="flex gap-4">
              <FaPhoneAlt className="mt-1 text-xl text-green-600" />
              <div>
                <p className="text-gray-700">+92 300 1234567</p>
                <p className="text-gray-700">+92 301 7654321</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaEnvelope className="mt-1 text-xl text-green-600" />
              <div>
                <p className="text-gray-700">info@uswa.org.pk</p>
                <p className="text-gray-700">uswa.org.pk@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaMapMarkerAlt className="mt-1 text-xl text-green-600" />
              <div className="text-gray-700">
                Plot No.123,
                <br />
                Main ABCD 1,
                <br />
                Chakdara Road,
                Lahore,
                <br />
                Punjab, Pakistan
              </div>
            </div>

            <div className="flex gap-4">
              <FaClock className="mt-1 text-xl text-green-600" />
              <div>
                <p className="text-gray-700">Monday - Saturday</p>
                <p className="text-gray-700">9:00 AM - 5:00 PM</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </section>
  );
};

export default ContactForm;