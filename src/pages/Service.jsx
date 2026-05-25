import React from "react";

const services = [
  {
    title: "Mobile App Development",
    description:
      "Custom Android & iOS applications built using Flutter. High-performance, scalable, and user-friendly mobile apps with modern UI/UX.",
  },
  {
    title: "Hybrid App Development",
    description:
      "Cross-platform applications for Android & iOS using a single codebase, reducing development time and maintenance costs.",
  },
  {
    title: "Backend Development",
    description:
      "Secure backend solutions using Node.js, Express.js, Firebase, REST APIs, authentication, and cloud services.",
  },
  {
    title: "Web Development",
    description:
      "Responsive and modern websites built with React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.",
  },
  {
    title: "Database Solutions",
    description:
      "Firebase Firestore, MongoDB, and SQLite database design and integration for scalable applications.",
  },
  {
    title: "Push Notifications & Integrations",
    description:
      "Firebase Push Notifications, Payment Gateway, Maps, Social Login, and third-party API integrations.",
  },
];

const Service = () => {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#fa8816]">
            My Services
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            I provide complete Web & Mobile App Development solutions using the
            latest technologies. From idea to deployment, I focus on building
            scalable, secure, and user-friendly digital products.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#FF9933] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Free Support Section */}
        <div className="mt-20 bg-[#FF9933] rounded-2xl p-10 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            3 Months Free Support Included
          </h3>

          <p className="max-w-3xl mx-auto">
            Every website and mobile application comes with 3 months of free
            technical support, bug fixes, and maintenance to ensure smooth
            performance after deployment.
          </p>
        </div>

        {/* Why Choose Me */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">
            Why Choose Me?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "5+ Years Experience",
              "Android & iOS Apps",
              "React & Node.js Expert",
              "Firebase & MongoDB",
              "Clean Architecture",
              "Modern UI/UX",
              "API Integrations",
              "Free Maintenance Support",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow text-center font-medium"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;