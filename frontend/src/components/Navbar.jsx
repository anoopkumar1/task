import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="space-x-4">
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/signup" className="hover:underline">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
