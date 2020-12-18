import React from 'react';

const Input = ({ label, id, type, value, setValue, ...props }) => {
  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <>
      <label htmlFor={id} className="form-label mt-3 text-muted">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </>
  );
};

export default Input;
