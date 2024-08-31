import React from "react";
const NewsSkeleton = () => {
  return (
    <div className="border-2 border-zinc-400 mx-4 w-[350px] shadow-lg shadow-blue-300 rounded-xl relative p-4 my-2 h-[500px]">
      <div className="bg-zinc-400 rounded-md w-[315px] h-20 m-auto"></div>
      <div className="bg-zinc-400 rounded-md w-[315px] h-24 m-auto mt-2"></div>
      <div className="bg-zinc-400 rounded-md w-[135px] h-6 ml-auto mr-0 mt-2"></div>
      <div className="bg-zinc-400 rounded-md w-[315px] h-40 m-auto mt-2"></div>
      <div className="bg-zinc-400 rounded-md w-[165px] h-4 ml-auto mr-0 mt-2"></div>
      <div className="bg-zinc-400 rounded-md w-[115px] h-10 mx-auto mt-4"></div>
    </div>
  );
};

export default NewsSkeleton;
