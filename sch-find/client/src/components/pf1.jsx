import React from 'react';
import {useState} from "react";
import axios from "axios";

function ProfileForm() {

  const [formData, setForm] = useState({
    name: "",
    course: "",
    GPA: "",
    location: "",
    incomeStatus: "",
    specialCategory: "",
  });

  const handleChange = (e) => {
    setForm({...formData, [e.target.name] : e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/profile", form);
      alert("Profile saved!");
    } catch (err) {
      console.error(err);
      alert("Error saving profile!!");
    }
  };

  return (
    <form onSubmit = {handleSubmit}>
        {Object.keys(formData).map((field) => (
        <div key={field}>
          <label>{field}</label>
          <input
            name={field}
            value={form[field]}
            onChange={handleChange}
            required={field !== "specialCategory"}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProfileForm;


<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Your Profile</h2>
        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Course */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Course</label>
            <input
              type="text"
              name="course"
              placeholder="e.g., B.Tech CSE"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              value={formData.course}
              onChange={handleChange}
              required
            />
          </div>

          {/* GPA */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">GPA</label>
            <input
              type="number"
              name="gpa"
              placeholder="e.g., 8.5"
              step="0.01"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              value={formData.gpa}
              onChange={handleChange}
              required
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              placeholder="City, State"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Income Status */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Income Status (Optional)</label>
            <input
              type="text"
              name="incomeStatus"
              placeholder="e.g., Below 5 LPA"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              value={formData.incomeStatus}
              onChange={handleChange}
            />
          </div>

          {/* Special Category */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Special Category (Optional)</label>
            <input
              type="text"
              name="specialCategory"
              placeholder="e.g., SC/ST, First-gen"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              value={formData.specialCategory}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>

        </form>
      </div>
    </div>