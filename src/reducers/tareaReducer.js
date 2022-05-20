import {types} from '../types'

const initialState = {
    tareas: [],
    loading: true,
    error: null,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_TAREAS:
        case types.GET_ORDER_TAREAS:
            return {
                ...state,
                loading: true,
            }

        case types.GET_ALL_TAREAS_SUCCESS:
        case types.GET_ORDER_TAREAS_SUCCESS:
            return {
                ...state,
                tareas: action.payload,
                loading: false,
                error: null,
            }

        case types.GET_ALL_TAREAS_ERROR:
        case types.GET_ORDER_TAREAS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
    
        default:
            return state
            
    }
}