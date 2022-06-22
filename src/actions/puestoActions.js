import clientAxios from "../config/axios";
import {types} from '../types'


export function getAllPuestosAction() {
    return async (dispatch) => {
        dispatch(getAllPuestosRequest())
        await clientAxios.get('/puesto')
        .then( res => {
            dispatch(getAllPuestosSuccess(res.data.puestos))
        }).catch( err => {
            dispatch(getAllPuestosError(err.response.data))
        })
    }
}

const getAllPuestosRequest = () => ({
    type: types.GET_ALL_PUESTOS
})

const getAllPuestosSuccess = payload => ({
    type: types.GET_ALL_PUESTOS_SUCCESS,
    payload
})

const getAllPuestosError = payload => ({
    type: types.GET_ALL_PUESTOS_ERROR,
    payload
})


export function getPuestoAction(id){
    return async (dispatch) => {
        (getPuestoRequest())
        await clientAxios.get(`/puesto/${id}`)
        .then( res => {
            dispatch(getPuestoSuccess(res.data.puesto))
        }).catch( err => {
            dispatch(getPuestoError(err.response.data))
        })
    }
}

const getPuestoRequest = () => ({
    type: types.EDIT_PUESTO
})

const getPuestoSuccess = payload => ({
    type: types.EDIT_PUESTO_SUCCESS,
    payload
})

const getPuestoError = payload => ({
    type: types.EDIT_PUESTO_ERROR,
    payload
})


export function createPuestoAction(data){
    return async (dispatch) => {
        dispatch(createPuestoRequest())
        await clientAxios.post('/puesto', data)
        .then( res => {
            dispatch(createPuestoSuccess(res.data.puesto))
        }).catch( err => {
            dispatch(createPuestoError(err.response.data))
        })
    }
}

const createPuestoRequest = () => ({
    type: types.CREATE_PUESTO
})

const createPuestoSuccess = payload => ({
    type: types.CREATE_PUESTO_SUCCESS,
    payload
})

const createPuestoError = payload => ({
    type: types.CREATE_PUESTO_ERROR,
    payload
})


export function updatePuestoAction(id, data){
    return async (dispatch) => {
        dispatch(updatePuestoRequest())
        await clientAxios.put(`/puesto/${id}`, data)
        .then( res => {
            console.log(res);
            dispatch(updatePuestoSuccess(res.data.puesto))
        }).catch( err => {
            console.log(err.response.data);
            dispatch(updatePuestoError(err.response.data))
        })
    }
}

const updatePuestoRequest = () => ({
    type: types.UPDATE_PUESTO
})

const updatePuestoSuccess = payload => ({
    type: types.UPDATE_PUESTO_SUCCESS,
    payload
})

const  updatePuestoError = payload => ({
    type: types.UPDATE_PUESTO_ERROR,
    payload
})

export function deletePuestoAction(id){
    return async (dispatch) => {
        dispatch(deletePuestoRequest())
        await clientAxios.delete(`/puesto/${id}`)
        .then( res => {
            dispatch(deletePuestoSuccess(res.data.puesto))
        }).catch( err => {
            dispatch(deletePuestoError(err.response.data))
        })
    }
}

const deletePuestoRequest = () => ({
    type: types.DELETE_PUESTO
})

const deletePuestoSuccess = payload => ({
    type: types.DELETE_PUESTO_SUCCESS,
    payload
})

const deletePuestoError = payload => ({
    type: types.DELETE_PUESTO_ERROR,
    payload
})

export function cancelEditPuestoAction(){
    return {
        type: types.EDIT_PUESTO_CANCEL
    }
}
