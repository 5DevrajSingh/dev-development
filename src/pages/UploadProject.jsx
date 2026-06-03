import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
const UploadProject = () => {
  //   const [imageFile, setImageFile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    applicationType: "Mobile Application",
    title: "",
    description: "",
    technologies: "",
    githubUrl: "",
    demoUrl: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await addDoc(collection(db, "projects"), {
        applicationType: formData.applicationType,
        title: formData.title,
        description: formData.description,
        technologies: formData.technologies
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item),

        githubUrl: formData.githubUrl,
        demoUrl: formData.demoUrl,
        imageUrl: null,
        createdAt: serverTimestamp(),
      });

      setShowSuccess(true);

      setFormData({
        applicationType: "Mobile Application",
        title: "",
        description: "",
        technologies: "",
        githubUrl: "",
        demoUrl: "",
        image: null,
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Upload Error:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       setLoading(true);

  //       let imageUrl = "";

  //       // Upload image to Firebase Storage
  //       if (formData.image) {
  //         const storageRef = ref(
  //           storage,
  //           `projects/${Date.now()}-${formData.image.name}`,
  //         );

  //         await uploadBytes(storageRef, formData.image);

  //         imageUrl = await getDownloadURL(storageRef);
  //       }

  //       // Save project to Firestore
  //       await addDoc(collection(db, "projects"), {
  //         applicationType: formData.applicationType,
  //         title: formData.title,
  //         description: formData.description,
  //         technologies: formData.technologies
  //           .split(",")
  //           .map((item) => item.trim()),

  //         githubUrl: formData.githubUrl,
  //         demoUrl: formData.demoUrl,

  //         imageUrl: imageUrl,

  //         createdAt: serverTimestamp(),
  //       });

  //       // Show success popup
  //       setShowSuccess(true);

  //       // Reset form
  //       setFormData({
  //         applicationType: "Mobile Application",
  //         title: "",
  //         description: "",
  //         technologies: "",
  //         githubUrl: "",
  //         demoUrl: "",
  //         image: null,
  //       });

  //       setTimeout(() => {
  //         setShowSuccess(false);
  //       }, 3000);
  //     } catch (error) {
  //       console.error("Upload Error:", error);
  //       alert(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20 lg:py-24 px-5 lg:px-20">
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 text-center shadow-2xl w-[90%] max-w-md">
            <div className="text-6xl mb-4">🎉</div>

            <h2 className="text-2xl font-bold text-green-600">
              Congratulations!
            </h2>

            <p className="mt-3 text-gray-600">
              Your project has been uploaded successfully.
            </p>
          </div>
        </div>
      )}
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#fa8816]">
            Upload Project
          </h1>

          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Add your latest Mobile or Web Application project to your portfolio.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Application Type */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Application Type
              </label>

              <select
                name="applicationType"
                value={formData.applicationType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#fa8816]"
              >
                {/* <option>Select Application Type</option> */}
                <option>Mobile Application</option>
                <option>Web Application</option>
              </select>
            </div>

            {/* Project Title */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Project Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="Enter project title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#fa8816]"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Project Description
              </label>

              <textarea
                rows="5"
                name="description"
                placeholder="Describe your project..."
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#fa8816]"
              />
            </div>

            {/* Technologies */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Technologies Used
              </label>

              <input
                type="text"
                name="technologies"
                placeholder="Flutter, Firebase, Provider"
                value={formData.technologies}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#fa8816]"
              />
            </div>

            {/* Github & Demo */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  GitHub URL
                </label>

                <input
                  type="url"
                  name="githubUrl"
                  placeholder="https://github.com/..."
                  value={formData.githubUrl}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#fa8816]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Demo URL
                </label>

                <input
                  type="url"
                  name="demoUrl"
                  placeholder="https://your-demo.com"
                  value={formData.demoUrl}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#fa8816]"
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Project Image
              </label>

              {/* <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    image: e.target.files[0],
                  })
                }
              /> */}

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    image: e.target.files[0],
                  })
                }
                className="w-full border border-dashed border-orange-300 rounded-xl px-4 py-4 cursor-pointer"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto bg-[#fa8816] hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-xl"
              >
                {loading ? "Uploading..." : "Upload Project"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadProject;
