import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Registration() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errors, setErrors] = useState({});
  const [emailExists, setEmailExists] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};

  
    if (!formData.fname) {
      isValid = false;
      validationErrors.fname = "First name required";
    }
    if (!formData.lname) {
      isValid = false;
      validationErrors.lname = "Last name required";
    }
    if (!formData.email) {
      isValid = false;
      validationErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = "Email is not valid";
    }
    if (!formData.password) {
      isValid = false;
      validationErrors.password = "Password required";
    } else if (formData.password.length < 8) {
      isValid = false;
      validationErrors.password = "Password should be at least 8 characters long";
    }
    if (formData.cpassword !== formData.password) {
      isValid = false;
      validationErrors.cpassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (isValid) {
      try {
        const response = await axios.get(`http://localhost:3000/users?email=${formData.email}`);
        if (response.data.length > 0) {
          setEmailExists(true);
        } else {
          await axios.post('http://localhost:3000/users', formData);
          alert("Registered Successfully");
          navigate('/login');
        }
      } catch (err) {
        console.error('Error during registration:', err);
      }
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Create an account
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            
            <div>
              <label htmlFor="fname" className="block text-sm font-medium text-gray-900 dark:text-white">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500"
                placeholder="Enter your First Name"
                value={formData.fname}
                onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                required
              />
              {errors.fname && <p className="text-red-600 text-sm mt-1">{errors.fname}</p>}
            </div>
            
           
            <div>
              <label htmlFor="lname" className="block text-sm font-medium text-gray-900 dark:text-white">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500"
                placeholder="Enter your Last Name"
                value={formData.lname}
                onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                required
              />
              {errors.lname && <p className="text-red-600 text-sm mt-1">{errors.lname}</p>}
            </div>
            
         
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              {emailExists && <p className="text-red-600 text-sm mt-1">Email already exists. Please use a different email.</p>}
            </div>
            
         
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
            </div>
            
          
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-900 dark:text-white">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500"
                placeholder="••••••••"
                value={formData.cpassword}
                onChange={(e) => setFormData({ ...formData, cpassword: e.target.value })}
                required
              />
              {errors.cpassword && <p className="text-red-600 text-sm mt-1">{errors.cpassword}</p>}
            </div>
            
           
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create an account
            </button>
            
           
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
