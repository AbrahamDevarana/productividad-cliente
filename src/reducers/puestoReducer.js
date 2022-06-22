import {types} from '../types'

const initialState = {
    puestos: [],
    loading: true,
    error: null,
    editing: null,
}



export default (state = initialState, action) => {

    switch (action.type) {
        case types.GET_ALL_PUESTOS:
        case types.CREATE_PUESTO:
        case types.EDIT_PUESTO:
        case types.UPDATE_PUESTO:
        case types.DELETE_PUESTO:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.GET_ALL_PUESTOS_SUCCESS:
            return {
                ...state,
                puestos: action.payload,
                loading: false,
                error: null
            }

        case types.GET_ALL_PUESTOS_ERROR:
        case types.CREATE_PUESTO_ERROR:
        case types.EDIT_PUESTO_ERROR:
        case types.UPDATE_PUESTO_ERROR:
        case types.DELETE_PUESTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        case types.CREATE_PUESTO_SUCCESS:
            return {
                ...state,
                puestos: [...state.puestos, action.payload],
                loading: false,
                error: null
            }

        case types.EDIT_PUESTO_SUCCESS:
            return {
                ...state,
                editing: action.payload,
                loading: false,
                error: null
            }
        
        case types.UPDATE_PUESTO_SUCCESS:   
            return {
                ...state,
                puestos: state.puestos.map(puesto => puesto.id === action.payload.id ? action.payload : puesto),
                loading: false,
                error: null,
                editing: null
            }
        
        case types.DELETE_PUESTO_SUCCESS:
            return {
                ...state,
                puestos: state.puestos.filter(puesto => puesto.id !== action.payload),
                loading: false,
                error: null
            }

        case types.EDIT_PUESTO_CANCEL:
            return {
                ...state,
                editing: null
            }
        default:
            return state
    }
}
            

