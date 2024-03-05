import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    userid: '',
    password: '',
    email: '',
    avatar: null, 
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    

    const inputValue = type === 'file' ? files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

    
      formDataToSend.append('userid', formData.userid);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('avatar', formData.avatar);

      const response = await fetch('http://localhost:8000/api/v1/user/register', {
        method: 'POST',
        body: formDataToSend,
      });
      console.log(response.json().then((res)=>{
        console.log(res.message)
        if(res.message==='User already exist')
        {
          alert("user already exist")
        }
        else{
          alert("Registration successful")
        }
      }).catch((err)=>{
        console.log(err);
      }));
     
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userid">
            User ID:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="userid"
            value={formData.userid}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
            Avatar:
          </label>
          <input
            className="w-full"
            type="file"
            name="avatar"
            onChange={handleChange}
            accept="image/*" // Restrict to image files, adjust as needed
          />
        </div>

        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
