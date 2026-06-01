import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving contact:", error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl text-[#fa8816] font-bold ">
            Contact Me
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help you build
            modern web and mobile applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-8 text-[#FF9933]">
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#FF9933] text-xl" />
                <span>devrajsingh3213@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#FF9933] text-xl" />
                <span>+91 9027208460</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#FF9933] text-xl" />
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-[#FF9933] text-xl" />
                <span>LinkedIn Profile</span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-[#FF9933] text-xl" />
                <span>GitHub Profile</span>
              </div>
            </div>

            <div className="mt-10 p-5 bg-orange-50 rounded-xl">
              <h4 className="font-semibold text-[#FF9933] mb-2">
                Free Consultation
              </h4>

              <p className="text-gray-600">
                Discuss your project requirements and get expert guidance before
                starting development.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-8 text-[#FF9933]">
              Send Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-4 outline-none focus:border-[#FF9933]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-4 outline-none focus:border-[#FF9933]"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg p-4 outline-none focus:border-[#FF9933]"
              />

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-4 outline-none focus:border-[#FF9933]"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#FF9933] hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-all duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-4 outline-none focus:border-[#FF9933]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-4 outline-none focus:border-[#FF9933]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg p-4 outline-none focus:border-[#FF9933]"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-4 outline-none focus:border-[#FF9933]"
              ></textarea> */}

              {/* <button
                type="submit"
                className="bg-[#FF9933] hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-all duration-300"
              >
                Send Message
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
