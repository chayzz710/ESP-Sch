import React, { useState } from "react";
import axios from "axios";

function ProfileForm() {
    const [formData, setFormData] = useState({
        name: "",
        course: "",
        GPA: "",
        location: "",
        incomeStatus: "",
        specialCategory: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting profile:", formData);
            await axios.post("http://localhost:4000/profile", 
                { ...formData, GPA: parseFloat(formData.GPA),}, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            alert("Profile saved!");
        }catch (err) {
            console.error(err);
            alert("Error saving profile!!");
        }
    };

    const placeholders = {
        name: "e.g., Narendra Modi",
        course: "e.g., B.Tech Computer Science",
        GPA: "e.g., 8.5",
        location: "e.g., Mumbai, India",
        incomeStatus: "e.g., Below 2 LPA",
        specialCategory: "e.g., SC/ST, Disability, Sports quota (optional)",
    };

    const inputLabels = {
        name: "Full Name",
        course: "Course of Study",
        GPA: "GPA / Grades",
        location: "Location",
        incomeStatus: "Family Income Status",
        specialCategory: "Special Category (optional)",
    }

    return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Create Profile</h2>
        {Object.keys(formData).map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium mb-1">
              {inputLabels[field]}
            </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required={field !== "specialCategory"}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder={placeholders[field]}
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div> 

    
  );
}

export default ProfileForm;
