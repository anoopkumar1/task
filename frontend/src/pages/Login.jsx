import React, { useState } from 'react';
import { login } from '../utils/api';
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData);
      alert('Login successful!');
    } catch (error) {
      setError('Invalid credentials, please try again.');
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
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4 relative">
          <AiOutlineMail className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border border-gray-300 rounded-md pl-10 p-2 w-full"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4 relative">
          <AiOutlineLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
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
        </div>

        <button
          type="submit"
          className="bg-black text-white p-2 rounded-md w-full hover:bg-gray-500"
        >
          Login
        </button>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
