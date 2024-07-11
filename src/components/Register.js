import React, { useState } from "react"; 
import axios from "axios"; // Import Axios 
import '../index.css'
export default function Register() { 
const [formData, setForm] = useState({ 
        name: "", 
        email: "", 
        password: "" 
    }); 
const handleChange = (e) => { 
const { id, value } = e.target; 
setForm((prevFormData) => ({ 
            ...prevFormData, 
[id]: value 
        })); 
    }; 
const handleSubmit = async (e) => { 
e.preventDefault(); // Prevent default form submission 
try { 
const response = await axios.post("http://localhost:3001/users/register", formData); 
console.log("Form data submitted successfully!", response); 
// Optionally, reset the form after submission 
setForm({ 
                name: "", 
                email: "", 
                password: "" 
            }); 
        } 
        
catch (error) { 
console.error("Error submitting form:", error); 
}
}

return ( 
<form className="max-w-sm pt-10 mx-auto">
    <div className="mb-5 ">
    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
    <input 
    type="text" id="name" name="name"
    onChange={handleChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
    placeholder="Your Name" required />
    </div>
    <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
    <input type="email" id="email" name="email"
    onChange={handleChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
    placeholder="Your Email" required />
    </div>
    <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
    <input type="password" id="password" name="password"
    onChange={handleChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
    placeholder="********" required />
    </div>
    <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    </div>
    <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    ); 
}