import React from "react";
import { useNavigate } from "react-router-dom";


function SuccessPopUp({ setSuccessPopUp }) {
  const navigate = useNavigate();
  return (
    <div className="shadow-xl shadow-gray-500 w-2/4 mx-auto border my-5 bg-green-400 text-center p-16 z-50 fixed top-64 left-96 rounded-2xl backdrop-blur-xl">
      <span className="text-3xl font-bold">Thank you For your Ratings</span>
      <div className="my-8">
        <a
          href="/"
          class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group mx-4"
          
        >
          <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
          <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            Go back
          </span>
          <span class="absolute inset-0 border-2 border-white rounded-full"></span>
        </a>
        <a
          href="#_"
          class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group mx-4"
          onClick={() => setSuccessPopUp(false)}
        >
          <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
          <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            Add More
          </span>
          <span class="absolute inset-0 border-2 border-white rounded-full"></span>
        </a>
      </div>
    </div>
  );
}

export default SuccessPopUp;
