import React from "react";
import { options } from "../utils/videos";
import Option from "../../../components/Option";
import Card from "../../../components/Card";

export default function ControlBar(props) {
  const { video, setVideo, header, subtitle } = props;

  function handleSelection(index) {
    setVideo(index);
  }

  const optionsArr = options.map((e, index) => {
    return (
      <Option
        key={index}
        options={e}
        isSelected={index == video}
        onClick={() => handleSelection(index)}
        setVideo={setVideo}
      />
    );
  });

  return (
    <div className="control-bar-container">
      <Card id={0} heading={header} content={subtitle}>
        <div>{optionsArr}</div>
      </Card>
    </div>
  );
}
