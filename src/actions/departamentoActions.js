import clientAxios from "../config/axios";
import {types} from '../types'

export function getAllDepartamentosAction(){
    return async (dispatch) => {
        dispatch(getAllDepartamentosRequest())
        await clientAxios.get('/departamento')
        .then( res => {
            dispatch(getAllDepartamentosSuccess(res.data.departamentos))
        }).catch( err => {
            dispatch(getAllDepartamentosError(err.response.data))
        })

    }
}

const getAllDepartamentosRequest = () => ({
    type: types.GET_ALL_DEPARTAMENTOS
})

const getAllDepartamentosSuccess = payload => ({
    type: types.GET_ALL_DEPARTAMENTOS_SUCCESS,
    payload
})

const getAllDepartamentosError = payload => ({
    type: types.GET_ALL_DEPARTAMENTOS_ERROR,
    payload
})

export function getDepartamentoAction(id){
    return async (dispatch) => {
        dispatch(getDepartamentoRequest())
        await clientAxios.get(`/departamento/${id}`)
        .then( res => {
            dispatch(getDepartamentoSuccess(res.data.departamento))
        }).catch( err => {
            dispatch(getDepartamentoError(err.response.data))
        })
    }
}

const getDepartamentoRequest = () => ({
    type: types.EDIT_DEPARTAMENTO
})

const getDepartamentoSuccess = payload => ({
    type: types.EDIT_DEPARTAMENTO_SUCCESS,
    payload
})

const getDepartamentoError = payload => ({
    type: types.EDIT_DEPARTAMENTO_ERROR,
    payload
})



export function getDepartamentoAreaAction(id){
    return async (dispatch) => {
        dispatch(getDepartamentoAreaRequest())
        await clientAxios.get(`/departamento/area/${id}`)
        .then( res => {
            dispatch(getDepartamentoAreaSuccess(res.data.departamento))
        }).catch( err => {
            dispatch(getDepartamentoAreaError(err.response.data))
        })
    }
}

const getDepartamentoAreaRequest = () => ({
    type: types.GET_ALL_DEPARTAMENTOS
})

const getDepartamentoAreaSuccess = payload => ({
    type: types.GET_ALL_DEPARTAMENTOS_SUCCESS,
    payload
})

const getDepartamentoAreaError = payload => ({
    type: types.GET_ALL_DEPARTAMENTOS_ERROR,
    payload
})





export function createDepartamentoAction(data){
    return async (dispatch) => {
        dispatch(createDepartamentoRequest())
        await clientAxios.post('/departamento', data)
        .then( res => {
            console.log(res)
            dispatch(createDepartamentoSuccess(res.data.departamento))
        }).catch( err => {
            console.log(err)
            dispatch(createDepartamentoError(err.response.data))
        })
    }
}

const createDepartamentoRequest = () => ({
    type: types.CREATE_DEPARTAMENTO
})
const createDepartamentoSuccess = payload => ({
    type: types.CREATE_DEPARTAMENTO_SUCCESS,
    payload
})
const createDepartamentoError = payload => ({
    type: types.CREATE_DEPARTAMENTO_ERROR,
    payload
})


export function updateDepartamentoAction(id, departamento){
    return async (dispatch) => {
        dispatch(updateDepartamentoRequest())
        await clientAxios.put(`/departamento/${id}`, departamento)
        .then( res => {
            dispatch(updateDepartamentoSuccess(res.data.departamento))
        }).catch( err => {
            dispatch(updateDepartamentoError(err.response.data))
        })
    }
}

const updateDepartamentoRequest = () => ({
    type: types.UPDATE_DEPARTAMENTO
})

const updateDepartamentoSuccess = payload => ({
    type: types.UPDATE_DEPARTAMENTO_SUCCESS,
    payload
})

const updateDepartamentoError = payload => ({
    type: types.UPDATE_DEPARTAMENTO_ERROR,
    payload
})


export function deleteDepartamentoAction(id){
    return async (dispatch) => {
        dispatch(deleteDepartamentoRequest())
        await clientAxios.delete(`/departamento/${id}`)
        .then( res => {
            dispatch(deleteDepartamentoSuccess(res.data.departamento))
        }).catch( err => {
            dispatch(deleteDepartamentoError(err.response.data))
        })
    }
}

const deleteDepartamentoRequest = () => ({
    type: types.DELETE_DEPARTAMENTO
})

const deleteDepartamentoSuccess = payload => ({
    type: types.DELETE_DEPARTAMENTO_SUCCESS,
    payload
})

const deleteDepartamentoError = payload => ({
    type: types.DELETE_DEPARTAMENTO_ERROR,
    payload
})

export function cancelEditDepartamentoAction(){
    return {
        type: types.EDIT_DEPARTAMENTO_CANCEL
    }
}


