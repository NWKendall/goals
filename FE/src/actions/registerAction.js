import axiosWithAuth from '../utils/axiosWithAuth';

export const REGISTER_LOADING = 'REGISTER_LOADING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const userRegister = userInfo => dispatch => {
    dispatch({ type: REGISTER_LOADING });
    axiosWithAuth()
        .post("/auth/register", userInfo)
        .then(res => {
            console.log(res.data);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err.data);
            dispatch({ type: REGISTER_FAILURE, pyaload: err.data });
        })
}