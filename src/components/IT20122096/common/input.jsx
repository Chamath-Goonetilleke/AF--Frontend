import React from 'react'

const Input = (props) => {
  const { label, name, onChange, type, error, value } = props;
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        
      />
      {error ? <div className="alert alert-danger">{error}</div> : null}
    </div>
  );
}
 
export default Input;