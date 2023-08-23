import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TextInput(props) {
  const { label, id, name, placeholder, value, onChange, type, icon } = props;

  const inputProps = {
    type: type ? type : "text",
    id,
    name,
    placeholder,
    required: true,
    onChange,
  };

  if (value !== undefined) {
    inputProps.value = value;
    inputProps.onChange = onChange;
  }

  return (
    <div className="input-container">
      <label htmlFor={id}>
        {icon && <FontAwesomeIcon icon={icon} />} {label}:
      </label>
      <input {...inputProps} />
    </div>
  );
}
