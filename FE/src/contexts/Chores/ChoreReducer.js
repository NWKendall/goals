import {
  ADD_CHORE,
  EDIT_CHORE,
  COMPLETE_CHORE,
  UN_COMPLETE_CHORE,
  ARCHIVE_CHORE,
  UN_ARCHIVE_CHORE,
  DELETE_ARCHIVED,
} from "../../types.js";

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
    case EDIT_CHORE:
      const { id, text } = payload
      return {
        ...state,
        chores: state.chores.map((chore) =>
          chore.id === id ? { ...chore, name: text } : chore
        ),
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
      [item] = state.chores.filter((chore) => chore.id === payload);
      item.archived = true;
      return {
        ...state,
        chores: state.chores.filter((chore) => chore.id !== payload),
        archive: [...state.archive, item],
      };

    case UN_ARCHIVE_CHORE:
      [item] = state.archive.filter((chore) => chore.id === payload);
      item.archived = false;
      return {
        ...state,
        chores: [...state.chores, item],
        archive: state.archive.filter((chore) => chore.id !== payload),
      };

    case DELETE_ARCHIVED:
      return {
        ...state,
        archive: state.archive.filter((chore) => chore.id !== payload),
      };
    default:
      return state;
  }
};
