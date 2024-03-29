import React, { useEffect, useReducer } from "react";
import ChoresReducer from "./ChoreReducer.js";
import ChoresContext from "./ChoresContext.js";

import {
  ADD_CHORE,
  EDIT_CHORE,
  COMPLETE_CHORE,
  UN_COMPLETE_CHORE,
  ARCHIVE_CHORE,
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
    const choresState = localStorage.getItem("Chores");
    return choresState ? JSON.parse(choresState) : initialState;
  });

  // actions
  const addChore = (data) => {
    return dispatch({ type: ADD_CHORE, payload: data });
  };

  const editChore = (id, text) => {
    return dispatch({ type: EDIT_CHORE, payload: {id, text} });
  }

  const completeChore = (data) => {
    return dispatch({ type: COMPLETE_CHORE, payload: data });
  };

  const unCompleteChore = (data) => {
    return dispatch({ type: UN_COMPLETE_CHORE, payload: data });
  };

  const archiveChore = (data) => {
    return dispatch({ type: ARCHIVE_CHORE, payload: data });
  };

  const unArchiveChore = (data) => {
    return dispatch({ type: UN_ARCHIVE_CHORE, payload: data });
  };

  const deleteArchived = (data) => {
    return dispatch({ type: DELETE_ARCHIVED, payload: data });
  };

  useEffect(() => {
    // need custom hook for localStorage
    localStorage.setItem("Chores", JSON.stringify(state));
  }, [state]);

  return (
    <ChoresContext.Provider
      value={{
        chores: state.chores,
        archive: state.archive,
        addChore,
        editChore,
        completeChore,
        unCompleteChore,
        archiveChore,
        unArchiveChore,
        deleteArchived
      }}
    >
      {props.children}
    </ChoresContext.Provider>
  );
};

export default ChoresProvider;
