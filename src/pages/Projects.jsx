import React from 'react'

const projects = {
  flutter: [
    {
      title: "Chat Application",
      description:
        "Real-time chat app with video sharing, voice messages, and SQLite storage.",
      tech: ["Flutter", "Provider", "SQLite", "Firebase"],
      image: "/images/chat-app.png",
      demo: "#",
      github: "#",
    },
    {
      title: "Car Assistant Bot",
      description:
        "AI-powered car buying and selling assistant built in Flutter.",
      tech: ["Flutter", "REST API", "JSON"],
      image: "/images/car-bot.png",
      demo: "#",
      github: "#",
    },
  ],

  web: [
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website built using React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
      image: "/images/portfolio.png",
      demo: "#",
      github: "#",
    },
    {
      title: "E-Commerce Website",
      description:
        "Modern shopping website with cart and payment integration.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/images/ecommerce.png",
      demo: "#",
      github: "#",
    },
  ],
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-white py-16 lg:py-24 px-5 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
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
