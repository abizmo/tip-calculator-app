import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ icon, label, type }) => (
  <div>
    <h3>{label}</h3>
    {icon}
    <input type={type} />
  </div>
);

Input.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
