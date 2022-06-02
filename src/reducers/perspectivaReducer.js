import { types } from "../types";

const initialState = {
    perspectivas: [],
    loading: true,
    error: null,
    editPerspectiva: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_PERSPECTIVAS:
        case types.GET_PERSPECTIVA:
        case types.CREATE_PERSPECTIVA:
        case types.UPDATE_PERSPECTIVA:
        case types.DELETE_PERSPECTIVA:
        case types.EDIT_PERSPECTIVA:
            return {
                ...state,
                loading: true,
                error: null,            
            }

        case types.EDIT_PERSPECTIVA_SUCCESS:
            return {
                ...state,
                editPerspectiva: action.payload,
                loading: false,
                error: null,
            }

        case types.GET_ALL_PERSPECTIVAS_SUCCESS:    
        case types.GET_PERSPECTIVA_SUCCESS:   
            return {
                ...state,
                loading: false,
                error: null,
                perspectivas: action.payload,
            }

        case types.CREATE_PERSPECTIVA_SUCCESS:   
            return {
                ...state,
                loading: false,
                error: null,
                perspectivas: [...state.perspectivas, action.payload],
            }
        
        case types.UPDATE_PERSPECTIVA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                perspectivas: state.perspectivas.map(perspectiva => perspectiva.id === action.payload.id ? action.payload : perspectiva),
                editPerspectiva: false,
            }

        case types.DELETE_PERSPECTIVA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                perspectivas: state.perspectivas.filter(perspectiva => perspectiva.id !== action.payload),
            }
        
        case types.GET_ALL_PERSPECTIVAS_ERROR:
        case types.GET_PERSPECTIVA_ERROR:
        case types.CREATE_PERSPECTIVA_ERROR:
        case types.UPDATE_PERSPECTIVA_ERROR:
        case types.DELETE_PERSPECTIVA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state

    }
}
