import clientAxios from "../config/axios";
import {types} from '../types'

//CORPORATIVO
export function getCorporativoAction(){
    return async (dispatch) => {
        dispatch(getCorporativoRequest())
        await clientAxios.get('/corporativo')
        .then( res => {
            dispatch(getCorporativoSuccess(res.data.corporativo))
        }).catch( err => {
            dispatch(getCorporativoError(err.response.data))
        })
    }
}


const getCorporativoRequest = () => ({
    type: types.GET_CORPORATIVO
})

const getCorporativoSuccess = payload => ({
    type: types.GET_CORPORATIVO_SUCCESS,
    payload
})

const getCorporativoError = payload => ({
    type: types.GET_CORPORATIVO_ERROR,
    payload
})

export function updateCorporativoAction(data){
    return async (dispatch) => {
        dispatch(updateCorporativoRequest())
        await clientAxios.put('/corporativo', data)
        .then( res => {
            dispatch(updateCorporativoSuccess(res.data.corporativo))
        }).catch( err => {
            dispatch(updateCorporativoError(err.response.data))
        })
    }
}

const updateCorporativoRequest = () => ({
    type: types.UPDATE_CORPORATIVO
})

const updateCorporativoSuccess = payload => ({
    type: types.UPDATE_CORPORATIVO_SUCCESS,
    payload
})

const  updateCorporativoError = payload => ({   
    type: types.UPDATE_CORPORATIVO_ERROR,
    payload
})