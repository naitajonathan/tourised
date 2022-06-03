import React from "react";

//styles
import "./VrWindow.css";

export default function VrWindow({ url, title = "Virtual Tour" }) {
  return (
    <div className="vr-window">
      <iframe src={url} title={title} width="100%" height="100%" />
    </div>
  );
}
