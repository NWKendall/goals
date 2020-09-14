import React, { useReducer } from "react";
import DailyContext from "./DailyContext.js";
import DailyReducer from "./DailyContext.js";

import { GET_ACTIVITIES, GET_SCORE, SCORE_INCREASE, SCORE_DECREASE, SET_ACTIVITIES} from '../../types.js';

const DailyState = (props) => {
  let initialState = {
    daily: [
      {
        name: "Awake",
        checked: false,
      },
      {
        name: "Stretch",
        checked: false,
      },
      {
        name: "Exercise",
        checked: false,
      },
      {
        name: "Mantra & Meditate",
        checked: false,
      },
      {
        name: "Study 1",
        checked: false,
      },
      {
        name: "30 mins Piano / Guitar",
        checked: false,
      },
      {
        name: "Study 2",
        checked: false,
      },
      {
        name: "Reading 30 mins",
        checked: false,
      },
    ],
    score: 0,
  };

  const [state, dispatch] = useReducer(DailyReducer, initialState);

  const getActivities = () => {
      dispatch({ type: GET_ACTIVITIES, payload: initialState.daily})
  }

  return (
    <DailyContext.Provider 
        value={{ 
            daily: state.daily, 
            score: state.score,
            getActivities
        }}>
      {props.children}
    </DailyContext.Provider>
  );
};

export default DailyState;