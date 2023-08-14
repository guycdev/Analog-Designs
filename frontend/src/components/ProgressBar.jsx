import React from "react";

export default function ProgressBar(props) {
  const { formData, formFieldCount } = props;

  function formProgress() {
    let count = 0;
    Object.values(formData).forEach((prev, index) => {
      if (Array.isArray(prev)) {
        return isObjectEmpty(prev[0]) ? null : count++;
      }
      if (typeof prev == "object") {
        return isObjectEmpty(prev) ? null : count++;
      }
      if (prev) {
        count++;
      }
    });
    return (count / formFieldCount) * 100;
  }

  function isObjectEmpty(obj) {
    for (let key in obj) {
      if (obj[key]) return false;
    }
    return true;
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
