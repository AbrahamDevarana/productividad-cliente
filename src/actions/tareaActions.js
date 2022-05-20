import {types} from '../types'
import clientAxios from "../config/axios";


export function getAllTareasAction(){
    return async (dispatch) => {
        dispatch(getAllTareasRequest())
        await clientAxios.get('/acciones')
        .then( res => {
            dispatch(getAllTareasSuccess(res.data.data))
        })
        .catch( err => {
            dispatch(getAllTareasError(err.response.data))
        })
    }
}

const getAllTareasRequest = () => ({
    type: types.GET_ALL_TAREAS
})

const getAllTareasSuccess = payload => ({
    type: types.GET_ALL_TAREAS_SUCCESS,
    payload
})

const getAllTareasError = payload => ({
    type: types.GET_ALL_TAREAS_ERROR,
    payload
})

export function getOrderTareasAction(query){
    return async (dispatch) => {
        dispatch(getOrderTareasRequest())
        await clientAxios.get(`/acciones/filter/?filter=${query}`)
        .then( res => {
            console.log(res);
            dispatch(getOrderTareasSuccess(res.data.data))
        })
        .catch( err => {
            dispatch(getOrderTareasError(err.response.data))
        })
    }
}


const getOrderTareasRequest = () => ({
    type: types.GET_ORDER_TAREAS
})

const getOrderTareasSuccess = payload => ({
    type: types.GET_ORDER_TAREAS_SUCCESS,
    payload
})

const getOrderTareasError = payload => ({
    type: types.GET_ORDER_TAREAS_ERROR,
    payload
})