import clientAxios from "../config/axios";
import {types} from '../types'

export function getEstados() {
    return async (dispatch) => {
        dispatch(getEstadosRequest())
        await clientAxios.get('/location')
        .then( res => {
            dispatch(getEstadosSuccess(res.data.estados))
        }).catch( err => {
            dispatch(getEstadosError(err.response.data))
        }
        )
    }
}

const getEstadosRequest = () => ({
    type: types.GET_ESTADOS
})

const getEstadosSuccess = payload => ({
    type: types.GET_ESTADOS_SUCCESS,
    payload
})

const getEstadosError = payload => ({
    type: types.GET_ESTADOS_ERROR,
    payload
})

export function getMunicipios(id){
    return async (dispatch) => {
        dispatch(getMunicipiosRequest())
        await clientAxios.get(`/location/${id}`)
        .then( res => {
            dispatch(getMunicipiosSuccess(res.data.municipios))
        }).catch( err => {
            dispatch(getMunicipiosError(err.response.data))
        }
        )
    }
}

const getMunicipiosRequest = () => ({
    type: types.GET_MUNICIPIOS
})

const getMunicipiosSuccess = payload => ({
    type: types.GET_MUNICIPIOS_SUCCESS,
    payload
})

const getMunicipiosError = payload => ({
    type: types.GET_MUNICIPIOS_ERROR,
    payload
})