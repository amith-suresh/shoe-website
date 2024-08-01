import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";

const Login = () => {
  const { login } = useContext(StoreContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};

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

    if (!isValid) {
      setErrors(validationErrors);
      setValid(false);
      return;
    }

    try {
      const result = await axios.get("http://localhost:3000/users");
      const user = result.data.find((user) => user.email === formData.email);
      if (user) {
        if (formData.email === "Amithsuresh@gmail.com" && formData.password === "12345999") {
          navigate("/admin");
          alert('Welcome to the admin page');
        } else if (user.password === formData.password) {
          alert("Login successful");
          setValid(true);
          navigate("/");
          localStorage.setItem('id', user.id);
          login();
        } else {
          setValid(false);
          alert("Invalid credentials");
        }
      } else {
        setValid(false);
        alert("User not found");
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Login</h1>
        {!valid && (
          <div className="text-red-500 mb-4">
            {errors.email && <p>{errors.email}</p>}
            {errors.password && <p>{errors.password}</p>}
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Login
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Don't have an account? <Link to="/registration" className="text-blue-600 hover:underline">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
