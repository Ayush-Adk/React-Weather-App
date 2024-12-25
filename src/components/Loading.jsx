import React from 'react';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 flex justify-center items-center z-50 gap-6">
      <div className="border-8 border-t-8 border-white rounded-full w-20 h-20 animate-spin shadow-lg"></div>
      <div className="mt-4 text-xl font-bold text-white tracking-wide animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default Loading;
