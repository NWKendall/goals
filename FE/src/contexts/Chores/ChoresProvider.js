import React, { useEffect, useReducer } from "react";
import ChoresReducer from './ChoreReducer.js';
import ChoresContext from './ChoresContext.js';

import { ADD_CHORE, COMPLETE_CHORE, UN_COMPLETE_CHORE, ARCHIVE_COMPLETED_CHORES, DELETE_ARCHIVED, UN_ARCHIVE_CHORE } from '../../types.js';

const ChoresProvider = (props) => {
  let initialState = {
    chores: [],
    archive: []   
  };

  let [state, dispatch] = useReducer(ChoresReducer, initialState, () => {
    // custom localStorage hook needed!!!
    const storedState2 = localStorage.getItem("StoredState2");
    return storedState2 ? JSON.parse(storedState2) : initialState;
  });


  // actions 
   const addChore = (data) => {
    dispatch({ type: ADD_CHORE, payload: data });
  };
  
   const completeChore = (data) => {
    dispatch({ type: COMPLETE_CHORE, payload: data });
  };

  
  const unCompleteChore = (data) => {
    dispatch({ type: UN_COMPLETE_CHORE, payload: data });
  };

  const archiveCompletedChores = (data) => {
    dispatch({ type: ARCHIVE_COMPLETED_CHORES, payload: data });
  };

  const unArchiveCompletedChore = (data) => {
    dispatch({ type: UN_ARCHIVE_CHORE, payload: data });
  };
  
  
   const deleteArchivedChores = (data) => {
    dispatch({ type: DELETE_ARCHIVED, payload: data });
  };
  
  useEffect(() => {
    localStorage.setItem("StoredState2", JSON.stringify(state));

  }, [state]);

  return (
    <ChoresContext.Provider
      value={{addChore,
       
      }}
    >
      {props.children}
    </ChoresContext.Provider>
  );
};

export default ChoresProvider;
