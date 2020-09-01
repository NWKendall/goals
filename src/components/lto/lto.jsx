import React from "react";
import { ltoData } from "../data.js";

const LTObjectives = () => {
//   console.log(ltoData);

  function printValues(data) {
    console.log(3);
    data.map((v) => {
      return (<li>{v}</li>);
    });
  }

  function printKeys(key, val) {
    console.log(2);
    return (
      <ul>
        {key} 
        {printValues(val)}
      </ul>
    );
  }

  const printData = (data) => {
    console.log(1);
    for (const [key, value] of Object.entries(data)) {
      console.log(key, value);
      printKeys(key, value);
    }
  };

  return <div>{printData(ltoData)}</div>;
};

export default LTObjectives;
