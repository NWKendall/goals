import React, { useEffect, useReducer } from "react";
import moment from 'moment';
import { DailyContext, DailyReducer, } from "./";
import { USER_INFO_TO_STATE, SCORE_INCREASE, SCORE_DECREASE } from "../../types.js";


const DailyProvider = (props) => {
  // need to get date from BE post
  // call BE and get all task names using date
  // add checked forEach task name
  // do the same for every category (cardio, strength etc)
  let initialState = {
    date: moment().format('L'),
    user: {
      first_name: "",
      last_name: "",
      email: "",
    },
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
    fitness: {
      weight: 100,
      run: {
        distance: 0,
        time: 0,
      },
      pushups: {
        variation: "Normal",
        sets: 0,
        reps: 0
      },
      pullups: {
        variation: "",
        sets: 0,
        reps: 0
      },
    }
    
  };

  let [state, dispatch] = useReducer(DailyReducer, initialState, () => {
    // custom localStorage hook needed ??
    const storedState = localStorage.getItem("StoredState");
    return storedState ? JSON.parse(storedState) : initialState;
  });


  // actions 
  const userInfoToState = (data) => {
    dispatch({ type: USER_INFO_TO_STATE, payload: data });
  };
   const scoreIncrease = (data) => {
    dispatch({ type: SCORE_INCREASE, payload: data });
  };
  
   const scoreDecrease = (data) => {
    dispatch({ type: SCORE_DECREASE, payload: data });
  };
  
  useEffect(() => {
    localStorage.setItem("StoredState", JSON.stringify(state));
    // console.log({state})
  }, [state]);

  return (
    <DailyContext.Provider
      value={{
        daily: state.daily,
        score: state.score,
        fitness: state.fitness,
        userInfoToState,
        scoreIncrease,
        scoreDecrease,
      }}
    >
      {props.children}
    </DailyContext.Provider>
  );
};

export default DailyProvider;
