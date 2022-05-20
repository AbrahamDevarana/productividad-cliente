import clientAxios from "../config/axios";
import {types} from '../types'


export function loginAction(){
    return async (dispatch) => {
        dispatch(loginRequest())
        clientAxios.get('/login/google', )
        .then( res => {
            dispatch(loginSuccess(res.data))
        })
        .catch( err => {
            dispatch(loginError(err.response.data))
        })
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


// Logout

export function logoutAction(){
    return {
        type: types.LOGOUT
    }
}

export function getUserAction(){
    return async (dispatch) => {
    //   const token = localStorage.getItem('token')
    //   if(token){
    //     tokenAuth(token)
    //   }else{
    //     tokenAuth('')
    //   }
        await clientAxios.get('/user')
        .then( res => {
            dispatch({
                type: types.GET_USER,
                payload: res.data
            })
        })
        .catch( err => {
            dispatch({
                type: types.GET_USER,
                payload: null
            }) // si no hay token, no hay user
        })
}}
