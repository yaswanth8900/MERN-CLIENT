import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Login() {
  const [formData, setForm] = useState({ email: '', password: '' });
  const [loginData, setLoginData] = useState([]);

  const handleForm = (e) => {
    const { id, value } = e.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const getUserData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users/getusers');
      setLoginData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getUserData();
    console.log(loginData);
    let state = 0;
    const useraAll=loginData.getAllUsers;
    for (const user of useraAll) {
      if (user.email === formData.email && user.password === formData.password) {
        state = 1;
      }
    }
    if (state === 1) {
      alert("Login Successful");
    } else {
      alert("Login Unsuccessful");
    }
  };
  

  
  return (
    <form className="max-w-sm pt-10 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleForm}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Your Email"
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleForm}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="********"
          required
        />
      </div>
      
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}


