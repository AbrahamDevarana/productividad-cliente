import clientAxios from "../config/axios";
import {types} from '../types'


export function getAllAreasAction(){
    return async (dispatch) => {
        dispatch(getAllAreasRequest())
        await clientAxios.get('/area')
        .then( res => {
            dispatch(getAllAreasSuccess(res.data.areas))
        }).catch( err => {
            dispatch(getAllAreasError(err.response.data))
        })

    }
}


const getAllAreasRequest = () => ({
    type: types.GET_ALL_AREAS
})

const getAllAreasSuccess = payload => ({
    type: types.GET_ALL_AREAS_SUCCESS,
    payload
})

const getAllAreasError = payload => ({
    type: types.GET_ALL_AREAS_ERROR,
    payload
})


export function getAreaAction(id){
    return async (dispatch) => {
        dispatch(getAreaRequest())
        await clientAxios.get(`/area/${id}`)
        .then( res => {
            dispatch(getAreaSuccess(res.data.area))
        }).catch( err => {
            dispatch(getAreaError(err.response.data))
        })
    }
}

const getAreaRequest = () => ({
    type: types.EDIT_AREA
})

const getAreaSuccess = payload => ({
    type: types.EDIT_AREA_SUCCESS,
    payload
})

const getAreaError = payload => ({
    type: types.EDIT_AREA_ERROR,
    payload
})


export function createAreaAction(area){
    return async (dispatch) => {
        dispatch(createAreaRequest())
        await clientAxios.post('/area', area)
        .then( res => {
            dispatch(createAreaSuccess(res.data.area))
        }).catch( err => {
            dispatch(createAreaError(err.response.data))
        })

    }
}

const createAreaRequest = () => ({
    type: types.CREATE_AREA
})

const createAreaSuccess = payload => ({
    type: types.CREATE_AREA_SUCCESS,
    payload
})

const createAreaError = payload => ({
    type: types.CREATE_AREA_ERROR,
    payload
})


export function updateAreaAction(id, area){
    return async (dispatch) => {
        dispatch(updateAreaRequest())
        await clientAxios.put(`/area/${id}`, area)
        .then( res => {
            dispatch(updateAreaSuccess(res.data.area))
        }).catch( err => {
            dispatch(updateAreaError(err.response.data))
        })

    }
}

const updateAreaRequest = () => ({
    type: types.UPDATE_AREA
})

const updateAreaSuccess = payload => ({
    type: types.UPDATE_AREA_SUCCESS,
    payload
})

const updateAreaError = payload => ({
    type: types.UPDATE_AREA_ERROR, 
    payload
})

export function cancelEditAreaAction(){
    return {
        type: types.EDIT_AREA_CANCEL
    }
}

export function deleteAreaAction(id){
    return async (dispatch) => {
        dispatch(deleteAreaRequest())
        await clientAxios.delete(`/area/${id}`)
        .then( res => {
            console.log(res.data);
            dispatch(deleteAreaSuccess(res.data.area.id))
        }).catch( err => {
            dispatch(deleteAreaError(err.response.data))
        })

    }
}

const deleteAreaRequest = () => ({
    type: types.DELETE_AREA
})

const deleteAreaSuccess = payload => ({
    type: types.DELETE_AREA_SUCCESS,
    payload
})

const deleteAreaError = payload => ({
    type: types.DELETE_AREA_ERROR,
    payload
})

