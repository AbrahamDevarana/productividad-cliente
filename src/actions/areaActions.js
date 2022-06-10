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
