import React from "react";

const NumberButton = ({ number, buttonClass, addNumber }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {buttonClass === "zero" ? (
        <button className="button zero" onClick={() => addNumber(number)}>
          {number}
        </button>
      ) : (
        <button className="button number" onClick={() => addNumber(number)}>
          {number}
        </button>
      )}
    </>
  );
};

export default NumberButton;
