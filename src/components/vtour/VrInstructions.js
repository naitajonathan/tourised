import React from "react";

//assets
import desktopInstructions from "../../assets/vr-instructions_desktop.svg";
import poweredBy from "../../assets/vr-powered_by_tourised.svg";
import background from "../../assets/images/vr-background.png";

//styles
import "./VrInstructions.css";

export default function VrInstructions({ handleClick }) {
  return (
    <div
      className="vr-instruction"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="content">
        <h3 className="welcome">Welcome</h3>
        <img src={desktopInstructions} alt="virtual tour instructions" />
        <button className="btn" onClick={handleClick}>
          start tour
        </button>
        <img src={poweredBy} alt="Powered by Tourised" />
      </div>
    </div>
  );
}
