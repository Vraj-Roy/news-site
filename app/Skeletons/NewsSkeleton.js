import React from "react";
const NewsSkeleton = () => {
  return (
    <div className="border-2 w-96 shadow-lg shadow-blue-300 rounded-xl relative p-4 my-2 h-[500px]">
      <div className="bg-zinc-200 rounded-md w-[330px] h-20 m-auto"></div>
      <div className="bg-zinc-200 rounded-md w-[330px] h-24 m-auto mt-2"></div>
      <div className="bg-zinc-200 rounded-md w-[150px] h-6 ml-auto mr-2 mt-2"></div>
      <div className="bg-zinc-200 rounded-md w-[330px] h-40 m-auto mt-2"></div>
      <div className="bg-zinc-200 rounded-md w-[180px] h-4 ml-auto mr-2 mt-2"></div>
      <div className="bg-zinc-200 rounded-md w-[150px] h-10 mx-auto mt-4"></div>
    </div>
  );
};

export default NewsSkeleton;
