import React from 'react';

const AuthForm = ({ formData, setFormData, errors, handleSubmit, buttonText }) => {
  return (
    <form
      className="bg-white p-6 rounded-md shadow-md w-full max-w-sm mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 w-full rounded-md hover:bg-blue-600"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;
