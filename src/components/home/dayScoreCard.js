import React from 'react';
import moment from 'moment';
import './home.styles.css';

const DayScoreCard = ({data, key}) => {
    const { score, date, daily } = data;


    // let altDate = JSON.parse(date)
    // console.log("!", altDate)



    return (
        <div className="scoreCard">
            <h4 className="dateStyle">{date}</h4>
            <button className="buttonStyle">V</button>
            <h3 className="scoreStyle">Score: {score}</h3>
                {/* {daily.map(activity => (
                    <div className="dailyScores">
                        <p>{activity.name}</p>
                        <p>{activity.checked ? `✅` : `❌`}</p>
                    </div>
                ))} */}
        </div>
    )
}

export default DayScoreCard
