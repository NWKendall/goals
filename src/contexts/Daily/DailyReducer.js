import {  SCORE_INCREASE, SCORE_DECREASE } from '../../types.js';

export default (state, action) => {
    const { payload, type } = action;

    switch(type) {  

        case SCORE_INCREASE:
            return {
                ...state,
                daily: state.daily.map(activity => 
                    activity.name === payload ? {...activity, checked: true } : activity
                ),
                score: state.score + 1
            }

        case SCORE_DECREASE:
            return {
                ...state,
                daily: state.daily.map(activity => 
                    activity.name === payload ? {...activity, checked: false } : activity
                ),
                score: state.score - 1
            }
        default:
            return state;
    }
};