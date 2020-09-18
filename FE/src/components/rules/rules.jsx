import React from "react";
import './rules.styles.css';

const Rules = () => {
  return (
    <div>
      <h2>Rules</h2>
      <ol>
        <li>Must wak up early! 7:15!</li>
        <li>
          No Phone until earliest 18:30. No longer than 1 hour. Youtube for
          coding/study music only.
        </li>
        <li>Must stretch to fix up your back.</li>
        <li>
          <ul>
            Food:
            <li>- Vegan</li>
            <li>- No Eggs</li>
            <li>- Less bread / carbs</li>
            <li>- More veg</li>
            <li>- Fruits and Oatmeal</li>
          </ul>
        </li>
        <li>
          <ul>
            Contribute:
            <li>- walk fitz</li>
            <li>- cook healthy food with love</li>
            <li>- help clean</li>
          </ul>
        </li>
        <li>Get outside as much as you can!</li>
      </ol>
    </div>
  );
};

export default Rules;
