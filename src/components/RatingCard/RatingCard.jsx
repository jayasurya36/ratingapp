import React from "react";

function RatingCard({ data }) {
  return (
    <div className="border m-4 rounded-xl overflow-hidden bg-slate-100">
      <div className="w-full bg-green-100 px-4 py-2 text-xl font-bold text-[#0000FF] flex justify-between ">
        <span className="block">{data?.name}</span>
        <span className="block">{data?.birthday}</span>
      </div>
      <div className="px-4 py-2">
        <span className="text-sm font-bold block">Improvements:</span>
        <span className="ml-4">{data?.improvements}</span>
      </div>
      {data?.mainGoal?.length > 0 && (
        <ul className="px-4 m-2">
          <span className="text-sm font-bold">Used for:</span>
          {data?.mainGoal?.map((data) => (
            <li className="px-4">{data}</li>
          ))}
        </ul>
      )}
      <div className="p-4 flex justify-between bg-green-100">
        <div>
          How Offen Used : <span className="font-bold">{data?.howOffen}</span>
        </div>
        <div>
          Rating:
          <span className="font-bold text-[#0000FF]"> {data?.experience} </span>
        </div>
      </div>
    </div>
  );
}

export default RatingCard;
