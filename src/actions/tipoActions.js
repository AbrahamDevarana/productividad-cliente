import { types } from '../types';
import clientAxios from '../config/axios';


export function getAllTipoTareaAccion(){
    return async (dispatch) => {
        dispatch(getAllTipoTareaRequest());
        await clientAxios.get('/tipo_acciones')
        .then(res => {
            dispatch(getAllTipoTareaSuccess(res.data.data))
        }).catch ( err => {
            dispatch(getAllTipoTareaError(err));
        })
    }
}

const getAllTipoTareaRequest = () => ({
    type: types.GET_ALL_TIPO_TAREA
});

const getAllTipoTareaSuccess = payload => ({
    type: types.GET_ALL_TIPO_TAREA_SUCCESS,
    payload
});

const getAllTipoTareaError = payload => ({
    type: types.GET_ALL_TIPO_TAREA_ERROR,
    payload
});





