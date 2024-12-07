import React, { useState } from 'react';
import { signup } from '../utils/api';
import { validateSignup } from '../utils/validateForm';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateSignup(formData);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      await signup(formData);
      alert('Signup successful! Please login.');
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <div className="mb-4 relative">
          <AiOutlineUser className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border border-gray-300 rounded-md pl-10 p-2 w-full"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4 relative">
          <AiOutlineMail className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border border-gray-300 rounded-md pl-10 p-2 w-full"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4 relative">
          <AiOutlinePhone className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="border border-gray-300 rounded-md pl-10 p-2 w-full"
            placeholder="Enter your mobile number"
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>

        <div className="mb-4 relative">
          <AiOutlineLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type={showPassword ? 'text' : 'password'} 
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="border border-gray-300 rounded-md pl-10 p-2 w-full"
            placeholder="Enter your password"
          />
          <div
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-3 cursor-pointer text-gray-400"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="bg-black text-white p-2 rounded-md w-full hover:bg-gray-500"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
