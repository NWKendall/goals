import React, { useEffect, useReducer } from "react";
import DailyContext from "./DailyContext.js";
import DailyReducer from "./DailyReducer.js";
import { SCORE_INCREASE, SCORE_DECREASE } from "../../types.js";

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

  let [state, dispatch] = useReducer(DailyReducer, initialState, () => {
    const storedState = localStorage.getItem("StoredState");
    return storedState ? JSON.parse(storedState) : initialState;
  });
  // const [state2, setState2] = useState(state)

  const scoreIncrease = (data) => {
    dispatch({ type: SCORE_INCREASE, payload: data });
  };

  const scoreDecrease = (data) => {
    dispatch({ type: SCORE_DECREASE, payload: data });
  };

  // useEffect(() => {
  //   localStorage.getItem("StoredState");
  // }, [])

  useEffect(() => {
    localStorage.setItem("StoredState", JSON.stringify(state));
  }, [state]);

  return (
    <DailyContext.Provider
      value={{
        daily: state.daily,
        score: state.score,
        scoreIncrease,
        scoreDecrease,
      }}
    >
      {props.children}
    </DailyContext.Provider>
  );
};

export default DailyState;
