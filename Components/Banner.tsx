import React from 'react';

const Banner = () => {
  return (
    <div className="w-full flex flex-col gap-5 md:flex-row md:gap-10 p-5">
      <div className="w-full md:w-[60%]">
        <h1 className="text-5xl font-semibold">Emmanuel&apos;s Daily Blog</h1>
        <p className="font-semibold text-gray-800">
          Welcome to <span className="underline decoration-orange-500 decoration-2">Every Developers</span> favourite blog in the Devosphere
        </p>
      </div>
      <div className="w-full md:w-[40%] text-gray-500 font-semibold">
        <p>
          New product features, The latest in technology, The weekly debugging nightmares and More!
        </p>
      </div>
    </div>
  );
};

export default Banner;
