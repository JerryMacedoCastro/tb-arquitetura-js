import React from 'react';

const SubmitButtton = ({ label, id, handleSubmit }) => {
  return (
    <>
      <button
        className="btn btn-outline-primary mt-2 "
        id={id}
        onClick={handleSubmit}
      >
        {label}
      </button>
    </>
  );
};

export default SubmitButtton;
