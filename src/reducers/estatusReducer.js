import {types} from '../types'

const initialState = {
    estatus: [],
    loading: true,
    error: null,
}


export default (state = initialState, action) => {

    switch (action.type) {
        case types.GET_ALL_ESTATUS:
            return {
                ...state,
                loading: true
            }
        case types.GET_ALL_ESTATUS_SUCCESS:
            return {
                ...state,
                estatus: action.payload,
                loadgin: false,
                error: null
        }

        case types.GET_ALL_ESTATUS_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
            
            
    
        default:
            return state;
    }
}
