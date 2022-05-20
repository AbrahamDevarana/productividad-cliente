import clientAxios from "../config/axios";
import {types} from '../types'



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
