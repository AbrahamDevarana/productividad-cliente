import { types } from '../types';

const initialState = {
    tipoAccion: [],
    loading: true,
    error: null,
}

export default (state = initialState, action) => {
        switch (action.type) {
            case types.GET_ALL_TIPO_TAREA:
                return {
                    ...state,
                    loading: true,
                }
            case types.GET_ALL_TIPO_TAREA_SUCCESS:
                return {
                    ...state,
                    tipoAccion: action.payload,
                    loading: false,
                    error: null,
                }
            case types.GET_ALL_TIPO_TAREA_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.payload,
                }
            
        
            default:
                return state
        }
}
