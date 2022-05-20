import clientAxios from "../config/axios";
import {types} from '../types'


export function getAllEstatusAction(){
    return async (dispatch) => {
        dispatch(getAllEstatusRequest())
        await clientAxios.get('/estatus')
        .then( res => {
            dispatch(getAllEstatusSuccess(res.data.data))
        })
        .catch( err => {
            dispatch(getAllEstatusError(err.response.data))
        })
    }
}

const getAllEstatusRequest = () => ({
    type: types.GET_ALL_ESTATUS
})

const getAllEstatusSuccess = payload => ({
    type: types.GET_ALL_ESTATUS_SUCCESS,
    payload
})

const getAllEstatusError = payload => ({
    type: types.GET_ALL_ESTATUS_ERROR,
    payload
})