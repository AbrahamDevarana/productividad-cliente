import {types} from '../types'

const initialState = {
    loading: true,
    error: null,
    devarana: []
}


export default (state = initialState, action) => {

    switch (action.type) {
        
    case types.GET_CORPORATIVO:
    case types.UPDATE_CORPORATIVO:
        return {
            ...state,
            loading: true,
            error: null
        }
    case types.GET_CORPORATIVO_SUCCESS:
        return {
            ...state,
            loading: false,
            devarana: action.payload,
            error:null
        }
    case types.GET_CORPORATIVO_ERROR:
    case types.UPDATE_CORPORATIVO_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload
        }
    case types.UPDATE_CORPORATIVO_SUCCESS:
        return {
            ...state,
            loading: false,
            devarana: action.payload,
            error:null
        }
        default:
            return state
    }
}