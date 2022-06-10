import {types} from '../types'

const initialState = {
    areas: [],
    loading: true,
    error: null,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_AREAS:
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

        case types.GET_ALL_AREAS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
    
        default:
            return state
    }
}