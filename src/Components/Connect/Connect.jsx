import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import {Link,NavLink} from 'react-router-dom'

export default function Connect() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-blue-600 p-8">
      <h1 className="text-white text-3xl font-bold mb-8">Make a Healthy Connection with us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaInstagram className="text-orange-600 text-5xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Instagram</h2>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium hover:underline">
            Follow
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaFacebook className="text-blue-700 text-5xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Facebook</h2>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium hover:underline">
            Friend
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaLinkedin className="text-blue-900 text-5xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium hover:underline">
            Connect
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaTwitter className="text-blue-400 text-5xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Twitter</h2>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium hover:underline">
            Follow
          </a>
        </div>
      </div>
    </div>
  );
}
