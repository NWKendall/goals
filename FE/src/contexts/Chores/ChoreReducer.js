import {
  ADD_CHORE,
  COMPLETE_CHORE,
  UN_COMPLETE_CHORE,
  ARCHIVE_COMPLETED_CHORES,
  DELETE_ARCHIVED,
  UN_ARCHIVE_CHORE,
} from "../../types.js";

// COMPLETE_CHORE - checkbox and strikethrough, marked as complete
// CLEAR_COMPLETE - sends to archive
// CLEAR_ARCHIVE - deletres from archive

export default (state, action) => {
  const { type, payload } = action;
  console.log( "CHORES REDUCER - payload", payload)

  console.log( "CHORES REDUCER", state, payload)

  switch (type) {
    case ADD_CHORE:
      console.log("reducer", payload)
      return {
        ...state,
        chores: [
          ...state.chores,
          {
            name: payload,
            completed: false,
            id: Date.now(),
            completed_at: "",
            archived: false,
          },
        ],
      };

    case COMPLETE_CHORE:
      return {
        ...state,
        chores: state.chores.map((chore) =>
          chore.id === payload
            ? { ...chore, completed: true, completed_at: Date.now() }
            : chore
        ),
      };

    case UN_COMPLETE_CHORE:
      return {
        ...state,
        chores: state.chores.map((chore) =>
          chore.id === payload
            ? { ...chore, completed: false, completed_at: "" }
            : chore
        ),
      };

    case ARCHIVE_COMPLETED_CHORES:
      return {
        ...state,
        archive: state.chores.map((chore) =>
          chore.id === payload ? { ...chore, archived: true } : chore
        ),
      };

    case UN_ARCHIVE_CHORE:
      return {
        ...state,
        archive: state.chores.map((chore) =>
          chore.id === payload ? { ...chore, archived: false } : chore
        ),
      };
    // case DELETE_ARCHIVED:

    default:
      return state;
  }
};