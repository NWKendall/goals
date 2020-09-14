import React from "react";
import './mantra.styles.css';
import { mantraData } from "../data.js";

const Mantra = () => {
  return (
    <>
      <h2>Mantra</h2>
      {mantraData.split(".").map((line, i) => <p key={i}>{line}.</p>)}
    </>
  );
};

export default Mantra;
