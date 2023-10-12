import React, { useEffect } from "react";
import { getRatings } from "../../store/ratingSlice";
import { useDispatch, useSelector } from "react-redux";
import RatingCard from "../RatingCard/RatingCard";
function Ratings() {
  const dispatch = useDispatch();
  const { ratings } = useSelector((state) => state?.rating);
  useEffect(() => {
    dispatch(getRatings());
  }, []);
  return (
    <div>
      <div className="text-center text-2xl font-bold text-[#0000FF] mt-4">
        Welcome to Ratings Page!
      </div>
      <div className="text-center my-8">
        <a
          href="/postRatings"
          class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
        >
          <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span class="relative z-20 flex items-center text-sm">
            <svg
              class="relative w-5 h-5 mr-2 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            Add Ratings
          </span>
        </a>
      </div>
      {ratings?.data?.length === 0 ? (
        <div className="text-center font-bold text-2xl text-[#0000FF]">Please Provide your first Rating!</div>
      ) : (
        ratings?.data?.map((data) => <RatingCard data={data} />)
      )}
    </div>
  );
}

export default Ratings;
