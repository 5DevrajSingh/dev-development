import React from 'react'
import ecommercepage from '../assets/ecommerce_app.png'
import courierwala from '../assets/courierwala.png'
import bizupon from '../assets/bizupon.png'
const projects = {
  flutter: [
    {
      title: "CourierWala",
      description:
        "A dual-module mobile application consisting of Client and Vendor apps for electricity service management, bill tracking, service requests, complaints, and vendor operations.",
      tech: ["Flutter", "Firebase", "REST API", "Push Notifications"],
      image: courierwala,
      demo: "#",
      github: "#",
    },
    {
      title: "Bizupon App",
      description:
        "A digital automotive marketplace and auction platform with vehicle listings, real-time bidding, secure transactions, and integrated chat functionality.",
      tech: ["Flutter", "Firebase", "REST API", "Real-time Chat"],
      image: bizupon,
      demo: "#",
      github: "#",
    },
    {
      title: "OfficeAssists App",
      description:
        "An office productivity application for task management, internal communication, notifications, and team collaboration.",
      tech: ["Flutter", "Firebase", "REST API"],
      image: ecommercepage,
      demo: "#",
      github: "#",
    },
    {
      title: "TaxinQ App",
      description:
        "A law and taxation platform that enables users to search and access new and historical laws with a seamless mobile experience.",
      tech: ["Flutter", "Firebase", "REST API"],
      image: ecommercepage,
      demo: "#",
      github: "#",
    },
    {
      title: "OnBoard App",
      description:
        "A recruitment and HR management platform designed for hiring, onboarding, employee management, and workforce operations.",
      tech: ["Flutter", "Firebase", "REST API"],
      image: ecommercepage,
      demo: "#",
      github: "#",
    },
    {
      title: "IOTtech HRM App",
      description:
        "Human Resource Management application for employee tracking, leave management, attendance, and performance monitoring.",
      tech: ["Flutter", "Firebase", "REST API"],
      image: ecommercepage,
      demo: "#",
      github: "#",
    },
    {
      title: "Rank2Top App",
      description:
        "An educational platform providing study materials, practice tests, performance analytics, and exam preparation tools.",
      tech: ["Flutter", "Firebase", "REST API"],
      image: ecommercepage,
      demo: "#",
      github: "#",
    },
    {
      title: "IotTechChat App",
      description:
        "A real-time chat application designed for customer support and team collaboration with instant messaging capabilities.",
      tech: ["Flutter", "Firebase", "REST API", "Real-time Chat"],
      image: ecommercepage,
      demo: "#",
      github: "#",
    },
  ],

  web: [
    {
      title: "Developer Portfolio",
      description:
        "Personal portfolio website showcasing projects, skills, experience, and contact information.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      image: "/images/portfolio.png",
      demo: "#",
      github: "#",
    },
    {
      title: "Drymato Website",
      description:
        "Modern product showcase website for dehydrated vegetables with responsive design and engaging user experience.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      image: "/images/drymato.png",
      demo: "#",
      github: "#",
    },
    {
      title: "PeehuDev Website",
      description:
        "Modern product showcase website for dehydrated vegetables with responsive design and engaging user experience.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      image: "/images/drymato.png",
      demo: "#",
      github: "#",
    },
  ],
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-white py-20 lg:py-24 px-5 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#fa8816] text-center mb-4">
          My Projects
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Flutter Applications & Web Development Projects
        </p>

        {/* Flutter Projects */}
        <h3 className="text-2xl font-bold mb-8 text-[#FF9933]">
          Flutter Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.flutter.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">
                  {project.title}
                </h4>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    className="bg-[#FF9933] text-white px-4 py-2 rounded"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="border border-gray-300 px-4 py-2 rounded"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Web Projects */}
        <h3 className="text-2xl font-bold mb-8 text-[#FF9933]">
          Web Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.web.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">
                  {project.title}
                </h4>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    className="bg-[#FF9933] text-white px-4 py-2 rounded"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="border border-gray-300 px-4 py-2 rounded"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
