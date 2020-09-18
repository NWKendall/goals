import React from "react";
import { stoData } from "../data.js";

const STObjectives = () => {
  console.log(stoData);
  return (
    <div>
      <div>
        <h3>Fitness / Health</h3>
        <ul>
          <li>get to 190lbs (by end of September)</li>
          <li>run under 8 minute mile</li>
          <li>5 pull ups</li>
          <li> 25 pushups </li>
          <li>no drinking alone</li>
        </ul>
      </div>
      <div>
        <h3>Professional</h3>
        <ul>
          <li>Get job in web development! Over $50k</li>
          <li>US unemployment</li>
          <li>build this excel into an app</li>
          <li>build projects portfolio</li>
          <li>complete CS intro course</li>
          <li>complete algo JS tutorial</li>
          <li>complete TS tutorial</li>
          <li>get linux working on external SSD</li>
          <li>revamp piHole (confer with Giugi)</li>
        </ul>
      </div>
      <div>
        <h3>Material</h3>
        <ul>
          <li>exercise bike for Winter</li>
        </ul>
      </div>
      <div>
        <h3>Relationship & Travel</h3>
        <ul>
          <li>get pregnant</li>
          <li>explore PEI/Canada</li>
        </ul>
      </div>
      <div>
        <h3>Personal</h3>
        <ul>
          <li>read more of everything (fantasy OK but not only)</li>
          <li>floss more</li>
          <li>play more music</li>
          <li>write more</li>
          <li>less netflix and YouTube</li>
          <li>socialize more</li>
          <li>more hiking</li>
        </ul>
      </div>
    </div>
  );
};

export default STObjectives;
