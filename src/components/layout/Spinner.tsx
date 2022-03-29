import React from 'react';
import SpinnerGif from '../../assets/spinner.gif';

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        src={SpinnerGif}
        alt="Loading..."
        className="text-center mx-auto"
        width={180}
      />
    </div>
  );
}

export default Spinner;
