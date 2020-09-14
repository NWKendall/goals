import { GET_ACTIVITIES, GET_SCORE, SCORE_INCREASE, SCORE_DECREASE, SET_ACTIVITIES} from '../../types.js';

export default (state, action) => {
    const { payload, type } = action;

    switch(type) {
        case GET_ACTIVITIES:
            return {
                ...state,
                daily: payload,
            };
        case SET_ACTIVITIES:
            return {
                ...state,
                daily: payload
            }
        case SCORE_INCREASE:
            return {
                ...state,
                score: state.score + 1
            };
        case SCORE_DECREASE:
            return {
                ...state,
                score: state.score - 1
            }        
        case GET_SCORE:
            return {
                ...state,
                score: payload
            }
        default:
            return state
    }
}