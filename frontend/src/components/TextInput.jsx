import React from "react";

export default function TextInput(props) {
  const { label, id, name, placeholder, value, onChange } = props;

  return (
    <div className="input-container">
      <label htmlFor={id}>{label}:</label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        required
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
