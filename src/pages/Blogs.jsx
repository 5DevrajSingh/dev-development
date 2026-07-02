import { section } from 'framer-motion/client'
import React from 'react'

import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    description:
      "Learn the fundamentals of React and build modern, fast and scalable web applications.",
    date: "29 June 2026",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    likes: 128,
    dislikes: 12,
  },
  {
    id: 2,
    title: "Understanding Tailwind CSS",
    description:
      "Discover how Tailwind CSS helps you build beautiful and responsive user interfaces faster.",
    date: "25 June 2026",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
    likes: 96,
    dislikes: 8,
  },
  {
    id: 3,
    title: "Why Choose Vite for React Projects?",
    description:
      "Explore the advantages of using Vite for modern frontend development and faster builds.",
    date: "20 June 2026",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    likes: 73,
    dislikes: 5,
  },
  {
    id: 4,
    title: "Getting Started with React",
    description:
      "Learn the fundamentals of React and build modern, fast and scalable web applications.",
    date: "29 June 2026",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    likes: 128,
    dislikes: 12,
  },
  {
    id: 5,
    title: "Understanding Tailwind CSS",
    description:
      "Discover how Tailwind CSS helps you build beautiful and responsive user interfaces faster.",
    date: "25 June 2026",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
    likes: 96,
    dislikes: 8,
  },
  {
    id: 6,
    title: "Why Choose Vite for React Projects?",
    description:
      "Explore the advantages of using Vite for modern frontend development and faster builds.",
    date: "20 June 2026",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    likes: 73,
    dislikes: 5,
  },
];

const Blogs = () => {
  return (
    <section className="w-full bg-white py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-14">
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Blogs
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Sharing my thoughts, tutorials, and experiences on web
            development and modern technologies.
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <FiCalendar size={16} />
                  <span>{blog.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-8">
                  {blog.description}
                </p>

                <hr className="mb-5" />

                {/* Footer */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaRegThumbsUp size={18} />
                      <span>{blog.likes}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <FaRegThumbsDown size={18} />
                      <span>{blog.dislikes}</span>
                    </div>
                  </div>

                  <button className="text-blue-600 font-medium hover:text-blue-800">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Blogs;

