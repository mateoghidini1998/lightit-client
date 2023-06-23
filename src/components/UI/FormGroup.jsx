import React from 'react';
import '../../styles/UI/FormGroup.css';

function FormGroup({ label, type, name, placeholder, value, onChange, options }) {
  return (
    <div className='field-container'>
      <label htmlFor="">{label}</label>
      {type === "checkbox" ? (
        <div className='checkbox-container'>
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                name={name}
                value={option}
                checked={value.includes(option)}
                onChange={onChange}
              />
              {option}
            </label>
          ))}
        </div>
      ) : (
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
      )}
    </div>
  );
}

export default FormGroup;
