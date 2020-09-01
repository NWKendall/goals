import React from "react";
import './mantra.styles.css';
import { mantraData } from "../data.js";

const Mantra = () => {
  return (
    <div>
      <h2>Mantra</h2>
      {mantraData.split(".").map((line, i) => <p key={i}>{line}.</p>)}
    </div>
  );
};

export default Mantra;
