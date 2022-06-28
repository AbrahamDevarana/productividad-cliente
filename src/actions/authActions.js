import clientAxios from "../config/axios";
import {types} from '../types'


export function loginAction(){
    return async (dispatch) => {
        dispatch(loginRequest())
        clientAxios.get('/auth/google', )
        .then( res => {
            console.log(res);
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
    return (dispatch) => {
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
    return async (dispatch) => {
        try {
            await clientAxios.get('/auth/logout', {withCredentials: true})
            dispatch(logoutSuccess())
        } catch (error) {
            dispatch(logoutError(error.response.data))
        }
    }
}

const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS
})

const logoutError = payload => ({
    type: types.LOGOUT_ERROR,
    payload
})

export function getUserAction(){
    return async (dispatch) => {
        //credentials
        await clientAxios.get('/auth/validate', { withCredentials: true })            
        .then( res => {
            dispatch(loginSuccess(res.data))
        })
        .catch( err => {
            dispatch(loginError(err.response.data))
        })
}}
