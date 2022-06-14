import {types} from '../types'

const initialState = {
    areas: [],
    loading: true,
    error: null,
    editing: null,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_AREAS:
        case types.CREATE_AREA:
        case types.EDIT_AREA:
        case types.UPDATE_AREA:
        case types.DELETE_AREA:
            return {
                ...state,
                loading: true
            }
        case types.GET_ALL_AREAS_SUCCESS:
            return {
                ...state,
                areas: action.payload,
                loading: false,
                error: null
        }

        case types.EDIT_AREA_ERROR:
        case types.GET_ALL_AREAS_ERROR:
        case types.CREATE_AREA_ERROR:
        case types.UPDATE_AREA_ERROR:
        case types.DELETE_AREA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case types.EDIT_AREA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                editing: action.payload
        }
        
        case types.CREATE_AREA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                areas: [...state.areas, action.payload]
        }

        case types.UPDATE_AREA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                areas: state.areas.map(area => area.id === action.payload.id ? action.payload : area),
                editing: null
        }

        case  types.EDIT_AREA_CANCEL:
            return {
                ...state,
                editing: null
        }

        case types.DELETE_AREA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                areas: state.areas.filter(area => area.id !== action.payload)
        }
        


        
            
        default:
            return state
    }
}