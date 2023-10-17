import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="flex justify-center align-middle">
      <div>
        <div class="w-16 h-16 border-t-4 border-white-900 border-solid rounded-full animate-spin"></div>
        <span className="text-white text-md">Please Wait..</span>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
