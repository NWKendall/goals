import { USER_INFO_TO_STATE, SCORE_INCREASE, SCORE_DECREASE } from "../../types.js";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case USER_INFO_TO_STATE:
      const { first_name, last_name, email } = payload
      return {
        ...state,
        user: {
          first_name: first_name,
          last_name: last_name,
          email: email
        }
      }
    case SCORE_INCREASE:
      return {
        ...state,
        daily: state.daily.map((activity) =>
          activity.name === payload ? { ...activity, checked: true } : activity
        ),
        score: state.score + 1,
      };

    case SCORE_DECREASE:
      return {
        ...state,
        daily: state.daily.map((activity) =>
          activity.name === payload ? { ...activity, checked: false } : activity
        ),
        score: state.score - 1,
      };
    default:
      return state;
  }
};
