import clientAxios from "../config/axios";
import {types} from '../types'
import { notification } from 'antd';


export function getAllUsersAction(){
    return async (dispatch) => {
        dispatch(getAllUsersRequest())
        await clientAxios.get('/users')
        .then( res => {
            dispatch(getAllUsersSuccess(res.data.data))
        })
        .catch( err => {
            dispatch(getAllUsersError(err.response.data))
        })
    }
}

const getAllUsersRequest = () => ({
    type: types.GET_ALL_USERS
})

const getAllUsersSuccess = payload => ({
    type: types.GET_ALL_USERS_SUCCESS,
    payload
})

const getAllUsersError = payload => ({
    type: types.GET_ALL_USERS_ERROR,
    payload
})


export function getUserAction(userActive){
    return async (dispatch) => {
        dispatch(getUserRequest())
        await clientAxios.get(`user/${userActive}`)
        .then( res => {
            dispatch(getUserSuccess(res.data))
        })
        .catch( err => {
            dispatch(getUserError(err.response))
        })
    }
}

const getUserRequest = () => ({
    type: types.GET_USER
})

const getUserSuccess = payload => ({
    type: types.GET_USER_SUCCESS,
    payload
})

const getUserError = payload => ({
    type: types.GET_USER_ERROR,
    payload
})

export function searchUserAction(slug){
    return async (dispatch) => {
        dispatch(searchUserRequest())
        await clientAxios.get(`/user/find/${slug}`)
        .then( res => {
            dispatch(searchUserSuccess(res.data))
        })
        .catch( err => {
            dispatch(searchUserError(err.response))
        })
    }
}

const searchUserRequest = () => ({
    type: types.SEARCH_USER
})

const searchUserSuccess = payload => ({
    type: types.SEARCH_USER_SUCCESS,
    payload
})

const searchUserError = payload => ({
    type: types.SEARCH_USER_ERROR,
    payload
})



export function updateUserAction(data){
    return async (dispatch) => {
        await clientAxios.put(`/user/update`, data)
        .then( res => {
            dispatch(updateUserSuccess(res.data.user))
            notification['success']({
                message: res.data.msg,
            });
        })
        .catch( err => {
            dispatch(updateUserError(err.response.data))
            notification['error']({
                message: err.response.data,
            });
        })
    }
}



const updateUserSuccess = payload => ({
    type: types.UPDATE_USER_SUCCESS,
    payload
})

const updateUserError = payload => ({
    type: types.UPDATE_USER_ERROR,
    payload
})
