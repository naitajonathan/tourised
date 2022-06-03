import React, { useState } from "react";

//styles
import "./VrTour.css";

//components
import VrWindow from "./VrWindow";
import VrInstructions from "./VrInstructions";

export default function VRtour() {
  const title = "Demo Virtual Tour of Kalanoga Deluxe Suite";
  const url =
    "https://tourised.com/files/virtualtours/entebbe/hotel/kalanoga/deluxesuite/";
  const [startTour, setStartTour] = useState(false);

  const handleStartTour = () => {
    setStartTour(true);
  };

  return (
    <div className="vrtour">
      {startTour && <VrWindow title={title} url={url} />}
      {!startTour && <VrInstructions handleClick={handleStartTour} />}
    </div>
  );
}
