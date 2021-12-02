import React from 'react';

// eslint-disable-next-line react/prop-types
const RadioInput = ({ id, label, name }) => (
  <label htmlFor={id}>
    {label}
    <input type="radio" name={name} id={id} />
  </label>
);

// eslint-disable-next-line react/prop-types
const RadioGroup = ({ children, inputsData }) => (
  <div>
    {
      // eslint-disable-next-line react/prop-types
      inputsData.map(({ id, label, name }) => (
        <RadioInput id={id} label={label} name={name} />
      ))
    }
    { children && children }
  </div>
);

export default RadioGroup;
