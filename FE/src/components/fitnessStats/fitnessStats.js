import React from "react";
import "./fitnessStats.styles.css";

const FitnessStats = () => {

  // Need an api call to retrienve the highest values for each stat
  // Need BE!

  return (
    <div className="statsContainer">
      <h3 className="statsHeader">Fitness Stats</h3>
      <div className="statsGridHeader">
        <h5>Type</h5>
        <h5>Date</h5>
        <h5>PB</h5>
      </div>
      <div className="statsGrid">
        <p>Weight</p>
        <p>09/18/20</p>
        <p>190.4 lbs</p>
      </div>
      <div className="statsGrid">
        <p>Run</p>
        <p>09/18/20</p>
        <p>??</p>
      </div>
      <div className="statsGrid">
        <p>Pushups</p>
        <p>09/17/20</p>
        <p>25</p>
      </div>
      <div className="statsGrid">
        <p>Pullups</p>
        <p>09/17/20</p>
        <p>4</p>
      </div>
    </div>
  );
};

export default FitnessStats;

