import React, { useEffect, useState } from "react";
import { postRatings } from "../../store/ratingSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessPopUp from "../SuccessPopUp/SuccessPopUp";

function PostRatings() {
  const dispatch = useDispatch();
  const { postRating } = useSelector((state) => state?.rating);
  const [successPopUp, setSuccessPopUp] = useState(false);
  const [ratingValues, setRatingValues] = useState({
    howOffen: "",
    mainGoal: [],
    experience: 0,
    improvements: "",
    birthday: "",
    name: "Anonymous",
  });

  const postData = (e) => {
    e.preventDefault();
    if (
      ratingValues.howOffen === "" ||
      ratingValues.birthday === "" ||
      ratingValues.experience === 0 ||
      ratingValues.mainGoal.length === 0 ||
      ratingValues.improvements === ""
    ) {
      toast.error("All fields are required", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }
    dispatch(postRatings(ratingValues));
  };
  useEffect(() => {
    if (postRating.success) {
      setRatingValues((data) => ({
        ...data,
        howOffen: "",
        experience: 0,
        birthday: "",
        improvements: "",
        mainGoal: [],
        name: "Anonymous",
      }));
      setSuccessPopUp(true);
    } else {
      toast.error(postRating?.message, {
        position: "top-right",
        theme: "dark",
      });
    }
  }, [postRating]);

  return (
    <div className="mx-auto px-48 py-12 bg-rose-50 z-10">
      <form onSubmit={postData}>
        <span className="p-2 text-2xl block my-2 text-green-500 text-center font-bold">
          Please Provide your valuable Feedbacks
        </span>
        <div className="m-2 border p-4 bg-white rounded-xl">
          <label className="font-bold">1.How often do you use this app?</label>
          <select
            className="font-medium ml-12"
            value={ratingValues.howOffen}
            onChange={(e) =>
              setRatingValues((data) => ({
                ...data,
                howOffen: e.target.value,
              }))
            }
          >
            <option value="">Select</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Rarely">Rarely</option>
            <option value="FirstTime">First Time</option>
          </select>
        </div>
        <div className="m-2 border p-4 bg-white rounded-xl">
          <label className="font-bold">2.Main app goal?</label>
          <div className="my-2">
            <div>
              <input
                type="checkbox"
                value="Information"
                id="Information"
                onChange={(e) =>
                  setRatingValues((data) => ({
                    ...data,
                    mainGoal: [...data.mainGoal, e.target.value],
                  }))
                }
              />
              <label htmlFor="Information">Information</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Chat"
                value="Chat"
                onChange={(e) =>
                  setRatingValues((data) => ({
                    ...data,
                    mainGoal: [...data.mainGoal, e.target.value],
                  }))
                }
              />
              <label htmlFor="Chat">Chat</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Entertainment"
                id="Entertainment"
                onChange={(e) =>
                  setRatingValues((data) => ({
                    ...data,
                    mainGoal: [...data.mainGoal, e.target.value],
                  }))
                }
              />
              <label htmlFor="Entertainment">Entertainment</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Buy"
                id="Buy"
                onChange={(e) =>
                  setRatingValues((data) => ({
                    ...data,
                    mainGoal: [...data.mainGoal, e.target.value],
                  }))
                }
              />
              <label htmlFor="Buy">Buy</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Socialize"
                id="Socialize"
                onChange={(e) =>
                  setRatingValues((data) => ({
                    ...data,
                    mainGoal: [...data.mainGoal, e.target.value],
                  }))
                }
              />
              <label htmlFor="Socialize">Socialize</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Others"
                id="Others"
                onChange={(e) =>
                  setRatingValues((data) => ({
                    ...data,
                    mainGoal: [...data.mainGoal, e.target.value],
                  }))
                }
              />
              <label htmlFor="Others">Others</label>
            </div>
          </div>
        </div>
        <div className="m-2 border p-4 bg-white rounded-xl">
          <label className="font-bold block">
            3.Rate user experience (1-10):
          </label>
          <span className="font-bold mx-2">0</span>
          <input
            type="range"
            className="my-2 w-2/3"
            onChange={(e) =>
              setRatingValues((data) => ({
                ...data,
                experience: parseInt(e.target.value / 10),
              }))
            }
          />
          <span className="font-bold mx-2">10</span>
          <span className="block mx-2 font-bold text-lg">
            {ratingValues.experience !== 0 && ratingValues.experience === 1 ? (
              <span className="text-red-500">Very Bad</span>
            ) : ratingValues.experience === 2 ? (
              <span className="text-red-500">Bad</span>
            ) : ratingValues.experience === 3 ? (
              <span className="text-red-500">Not Good</span>
            ) : ratingValues.experience === 4 ? (
              <span className="text-blue-500">Okay</span>
            ) : ratingValues.experience === 5 ? (
              <span className="text-blue-500">Good</span>
            ) : ratingValues.experience === 6 ? (
              <span className="text-green-500">Very Good</span>
            ) : ratingValues.experience === 7 ? (
              <span className="text-green-500">Excellent</span>
            ) : ratingValues.experience === 8 ? (
              <span className="text-green-500">Outstanding</span>
            ) : ratingValues.experience === 9 ? (
              <span className="text-green-500">Exceptional</span>
            ) : ratingValues.experience === 10 ? (
              <span className="text-green-500">Perfect</span>
            ) : (
              <></>
            )}
          </span>
        </div>
        <div className="m-2 border p-4 bg-white rounded-xl">
          <label className="font-bold block">4.Suggest any improvements:</label>
          <textarea
            placeholder="type here"
            className="border border-2 my-2 w-3/4 border-[#ccc] p-2 block min-h-[10rem]"
            value={ratingValues.improvements}
            onChange={(e) =>
              setRatingValues((data) => ({
                ...data,
                improvements: e.target.value,
              }))
            }
          />
        </div>
        <div className="m-2 border p-4 bg-white rounded-xl">
          <label className="font-bold block">5. Enter your birthday?</label>
          <input
            type="date"
            className="my-2"
            value={ratingValues.birthday}
            onChange={(e) =>
              setRatingValues((data) => ({
                ...data,
                birthday: e.target.value,
              }))
            }
          />
        </div>
        <div className="m-2 border p-4 bg-white rounded-xl">
          <label className="font-bold block">
            6.Please Enter Your Name?(optional)
          </label>
          <input
            className="border my-2 p-2 w-1/4"
            type="text"
            value={ratingValues.name}
            placeholder="Enter your Name"
            onChange={(e) =>
              setRatingValues((data) => ({ ...data, name: e.target.value }))
            }
          />
        </div>
        <div className=" w-1/2 mx-auto text-center my-4">
          <button type="button" className="mx-2">
            <a href="/" class="relative inline-block text-lg group">
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span class="relative">Go Back</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </button>
          <button type="submit" className="mx-2">
            <a href="#_" class="relative inline-block text-lg group">
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span class="relative">Post</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </button>
        </div>
      </form>
      <ToastContainer />
      {successPopUp && <SuccessPopUp setSuccessPopUp={setSuccessPopUp} />}
    </div>
  );
}

export default PostRatings;
