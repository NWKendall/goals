import React, { useState } from "react";
import "./dashboard.styles.css";

const DayScoreCard = (props) => {

  console.log("dayScoreCard", props);

  const [toggleScore, setToggleScore] = useState(false);

  return (
    <div key={props.index} className="scoreCard">
      <h4 className="dateStyle">{String(props.data.date)}</h4>
      <h3 className="scoreStyle">
        Score: {((props.data.score / 8) * 100).toFixed(1)}%
      </h3>
      <button
        onClick={() => setToggleScore(!toggleScore)}
        className="buttonStyle"
      >
        <span>👀</span>
      </button>
      <div>
        {toggleScore
          ? Object.entries(props.data.daily).map((activity, i) => (
              <div key={i} className="activityRow">
                <p>{activity[0]}</p>
                <p>
                  <span>{activity[1] ? `✅` : `❌`}</span>
                </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default DayScoreCard;