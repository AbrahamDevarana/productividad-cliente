import {types} from '../types'

const initialState = {
    departamentos: [],
    loading: true,
    error: null,
    editing: null,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_DEPARTAMENTOS:
        case types.CREATE_DEPARTAMENTO:
        case types.EDIT_DEPARTAMENTO:
        case types.UPDATE_DEPARTAMENTO:
        case types.DELETE_DEPARTAMENTO:
            return {
                ...state,
                loading: true
            }
        case types.GET_ALL_DEPARTAMENTOS_SUCCESS:
            return {
                ...state,
                departamentos: action.payload,
                loading: false,
                error: null
        }

        case types.EDIT_DEPARTAMENTO_ERROR:
        case types.GET_ALL_DEPARTAMENTOS_ERROR:
        case types.CREATE_DEPARTAMENTO_ERROR:
        case types.UPDATE_DEPARTAMENTO_ERROR:
        case types.DELETE_DEPARTAMENTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case types.EDIT_DEPARTAMENTO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                editing: action.payload
        }
        
        case types.CREATE_DEPARTAMENTO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                departamentos: [...state.departamentos, action.payload]
        }

        case types.UPDATE_DEPARTAMENTO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                departamentos: state.departamentos.map(departamento => departamento.id === action.payload.id ? action.payload : departamento),
                editing: null
        }

        case  types.EDIT_DEPARTAMENTO_CANCEL:
            return {
                ...state,
                editing: null
        }

        case types.DELETE_DEPARTAMENTO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                departamentos: state.departamentos.filter(departamento => departamento.id !== action.payload.id)
        }
        


        
            
        default:
            return state
    }
}