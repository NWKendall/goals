import React from "react";
import { mantraData } from "../data.js";

const Mantra = () => {
  return (
    <div>
      {mantraData.split(".").map((line, i) => <p key={i}>{line}.</p>)}
    </div>
  );
};

export default Mantra;
