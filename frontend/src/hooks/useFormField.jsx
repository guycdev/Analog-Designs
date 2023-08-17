import React from "react";

export default function useFormField(setter) {
  return function handleChange(event) {
    const { name, value } = event.target;

    setter((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
}
