import clientAxios from "../config/axios";
import {types} from '../types'


export function loginAction(){
    return async (dispatch) => {
        dispatch(loginRequest())
        clientAxios.get('/auth/google', )
        .then( res => {
            dispatch(loginSuccess(res.data))
        })
        .catch( err => {
            dispatch(loginError(err.response.data))
        })
    }
}

export function regularLoginAction(form){
    return async (dispatch) => {
        dispatch(loginRequest())
        try {
            const res = await clientAxios.post('/login', form)
            dispatch(loginSuccess(res.data))
        } catch (error) {
            dispatch(loginError(error.response.data))
        }          
    }
}


const loginSuccess = payload => ({
    type: types.LOGIN_SUCCESS,
    payload
})

const loginError = payload => ({
    type: types.LOGIN_ERROR,
    payload
})

const loginRequest = () => ({
    type: types.LOGIN_REQUEST
})


export function validateLoginAction(auth){
    return async (dispatch) => {
        if(auth){
            dispatch({
                type: types.LOGIN_VALIDATION_SUCCESS,
                payload: auth
            })
        }else{
            dispatch({
                type: types.LOGIN_VALIDATION_ERROR,
            })
        }

    }
}


// Logout

export function logoutAction(){
    return {
        type: types.LOGOUT
    }
}

// export function getUserAction(){
//     return async (dispatch) => {
//         await clientAxios.get('/login/verifyUser')
//         .then( res => {
//             dispatch({
//                 type: types.GET_USER_SUCCESS,
//                 payload: res.data
//             })
//         })
//         .catch( err => {
//             dispatch({
//                 type: types.GET_USER_ERROR,
//                 payload: null
//             }) // si no hay token, no hay user
//         })
// }}
