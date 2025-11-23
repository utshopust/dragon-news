import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FindUs = () => {
  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      color: "#1877F2",
      gradient: "linear-gradient(45deg,#1877F2,#6d84ff)",
      url: "https://www.facebook.com/hasan.ul.kabir.utsho",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      color: "#C13584",
      gradient: "linear-gradient(45deg,#C13584,#f77737)",
      url: "https://www.instagram.com/hasanulkabirutsho/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      color: "#0077B5",
      gradient: "linear-gradient(45deg,#0077B5,#00a0dc)",
      url: "https://www.linkedin.com/in/hasan-ul-kabir-utsho/",
    },
  ];

  return (
    <div className="max-w-md mx-auto text-center p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Find Us On</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-3 px-5 rounded-xl font-semibold text-white transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:scale-105"
            style={{ background: social.gradient }}
          >
            <span className="text-xl">{social.icon}</span>
            <span className="hidden sm:inline">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FindUs;
