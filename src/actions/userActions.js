import clientAxios from "../config/axios";
import {types} from '../types'
import { notification } from 'antd';


export function getAllUsersAction(){
    return async (dispatch) => {
        dispatch(getAllUsersRequest())
        await clientAxios.get('/user')
        .then( res => {
            dispatch(getAllUsersSuccess(res.data))
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


export function createUserAction(data){
    return async (dispatch) => {
        dispatch(createUserRequest())
        await clientAxios.post(`/user`, data)
        .then( res => {
            console.log(res);
            dispatch(createUserSuccess(res.data.user))
            notification['success']({
                message: res.data.msg,
            });
        })
        .catch( err => {
            console.log(err.response);
            dispatch(createUserError(err.response.data))
            notification['error']({
                message: err.response.data,
            });
        })
    }
}

const createUserRequest = () => ({
    type: types.CREATE_USER
})

const createUserSuccess = payload => ({
    type: types.CREATE_USER_SUCCESS,
    payload
})

const createUserError = payload => ({
    type: types.CREATE_USER_ERROR,
    payload
})


/// Related User Actions -- TODO find a different way to do this
export function addResponsabilityAction(data){
    return async (dispatch) => {
        dispatch(addResponsability(data))
        await clientAxios.post(`/user/responsabilidad`, data)
        .then( res => {
            console.log(res.data.responsabilidad);
            dispatch(addResponsabilitySuccess(res.data.responsabilidad))
            notification['success']({
                message: res.data.msg,
            });
        })
        .catch( err => {
            console.log(err.response);
            dispatch(addResponsabilityError(err.response.data))
            notification['error']({
                message: err.response.data,
            });
        })
    }
}


const addResponsability = (payload) => ({
    type: types.ADD_RESPONSABILITY,
    payload
})

const addResponsabilitySuccess = (payload) => ({
    type: types.ADD_RESPONSABILITY_SUCCESS,
    payload
})

const addResponsabilityError = (payload) => ({
    type: types.ADD_RESPONSABILITY_ERROR,
    payload
})


export function deleteResponsabilityAction(id) {
    return async (dispatch) => {
        dispatch(deleteResponsability(id))
        await clientAxios.delete(`/user/responsabilidad/${id}`,)
        .then( res => {
            console.log(res.data)
            dispatch(deleteResponsabilitySuccess(res.data))
            notification['success']({
                message: res.data.msg,
            });
        })
        .catch( err => {
            console.log(err.response);
            dispatch(deleteResponsabilityError(err.response.data))
            notification['error']({
                message: err.response.data,
            });
        })
    }
}

const deleteResponsability = (payload) => ({
    type: types.DELETE_RESPONSABILITY,
    payload
})

const deleteResponsabilitySuccess = (payload) => ({
    type: types.DELETE_RESPONSABILITY_SUCCESS,
    payload
})

const deleteResponsabilityError = (payload) => ({
    type: types.DELETE_RESPONSABILITY_ERROR,
    payload
})
