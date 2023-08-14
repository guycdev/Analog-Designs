import React from "react";

export default function ProgressBar(props) {
  const { formData, formFieldCount } = props;

  function formProgress() {
    let count = 0;
    Object.values(formData).forEach((prev) => {
      if (prev) {
        count++;
      }
    });
    return (count / formFieldCount) * 100;
  }

  const progressBar = formProgress();

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progressBar}%`, opacity: progressBar > 0 ? 1 : 0 }}
      ></div>
    </div>
  );
}
