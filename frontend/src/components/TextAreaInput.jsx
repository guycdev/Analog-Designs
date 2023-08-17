import React from "react";

export default function TextAreaInput(props) {
  const { label, id, name, placeholder, value, onChange } = props;

  return (
    <div className="input-container text-area-container">
      <label htmlFor={id}>{label}:</label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        required
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
