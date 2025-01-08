import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ScaleLoader color="#000000" />
    </div>
  );
};

export default Loader;
