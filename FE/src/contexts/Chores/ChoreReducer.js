import {
  ADD_CHORE,
  COMPLETE_CHORE,
  UN_COMPLETE_CHORE,
  ARCHIVE_CHORE,
  UN_ARCHIVE_CHORE,
  DELETE_ARCHIVED,
} from "../../types.js";

// COMPLETE_CHORE - checkbox and strikethrough, marked as complete
// CLEAR_COMPLETE - sends to archive
// CLEAR_ARCHIVE - deletres from archive

export default (state, action) => {
  const { type, payload } = action;
  let item;
  switch (type) {
    case ADD_CHORE:
      return {
        ...state,
        chores: [
          ...state.chores,
          {
            name: payload,
            checked: false,
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
            ? { ...chore, checked: true, completed_at: Date.now() }
            : chore
        ),
      };

    case UN_COMPLETE_CHORE:
      return {
        ...state,
        chores: state.chores.map((chore) =>
          chore.id === payload
            ? { ...chore, checked: false, completed_at: "" }
            : chore
        ),
      };

    case ARCHIVE_CHORE:
      // get item from chores
      // add to archive
      // remove from chores
      [item] = state.chores.filter((chore) => chore.id === payload)
      item.archived = true
      return {
        ...state,
        chores: state.chores.filter((chore) => chore.id !== payload),
        archive: [...state.archive, item]
      };

    case UN_ARCHIVE_CHORE:

      [item] = state.chores.filter((chore) => chore.id === payload)
      item.archived = false
      return {
        ...state,
        chores: [...state.chores, item],
        archive: state.archive.filter((chore) => chore.id !== payload)
      };

    case DELETE_ARCHIVED:
      break;

    default:
      return state;
  }
};

// state.archive.map((chore) =>
// chore.id === payload ? { ...chore, archived: true } : chore
