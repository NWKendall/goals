import React, { useEffect, useReducer } from "react";
import ChoresReducer from "./ChoreReducer.js";
import ChoresContext from "./ChoresContext.js";

import {
  ADD_CHORE,
  COMPLETE_CHORE,
  UN_COMPLETE_CHORE,
  ARCHIVE_COMPLETED_CHORES,
  DELETE_ARCHIVED,
  UN_ARCHIVE_CHORE,
} from "../../types.js";

const ChoresProvider = (props) => {
  let initialState = {
    chores: [],
    archive: [],
  };

  let [state, dispatch] = useReducer(ChoresReducer, initialState, () => {
    // custom localStorage hook needed!!!
    const storedState2 = localStorage.getItem("StoredState2");
    return storedState2 ? JSON.parse(storedState2) : initialState;
  });

  // actions
  const addChore = (data) => {
    return dispatch({ type: ADD_CHORE, payload: data });
  };

  const completeChore = (data) => {
    return dispatch({ type: COMPLETE_CHORE, payload: data });
  };

  const unCompleteChore = (data) => {
    return dispatch({ type: UN_COMPLETE_CHORE, payload: data });
  };

  const archiveCompletedChores = (data) => {
    return dispatch({ type: ARCHIVE_COMPLETED_CHORES, payload: data });
  };

  const unArchiveCompletedChore = (data) => {
    return dispatch({ type: UN_ARCHIVE_CHORE, payload: data });
  };

  const deleteArchivedChores = (data) => {
    return dispatch({ type: DELETE_ARCHIVED, payload: data });
  };

  useEffect(() => {
    // need custom hook for localStorage
    localStorage.setItem("StoredState2", JSON.stringify(state));
  }, [state]);

  return (
    <ChoresContext.Provider
      value={{
        chores: state.chores,
        archive: state.archive,
        addChore,
        completeChore,
        unCompleteChore,
        archiveCompletedChores,
        unArchiveCompletedChore,
        deleteArchivedChores,
      }}
    >
      {props.children}
    </ChoresContext.Provider>
  );
};

export default ChoresProvider;