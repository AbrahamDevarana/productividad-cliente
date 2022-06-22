import {types} from '../types'

const initialState = {
    estados: [],
    municipios: [],
    loading: true,
    error: null,
}


export default (state = initialState, action) => {
    
        switch (action.type) {
            case types.GET_ESTADOS:
                return {
                    ...state,
                    loading: true
                }
            case types.GET_ESTADOS_SUCCESS:
                return {
                    ...state,
                    estados: action.payload,
                    loading: false,
                    error: null
            }
    
            case types.GET_ESTADOS_ERROR:
                return{
                    ...state,
                    loading: false,
                    error: action.payload,
                }
                
            case types.GET_MUNICIPIOS:
                return {
                    ...state,
                    loading: true
                }

            case types.GET_MUNICIPIOS_SUCCESS:
                return {
                    ...state,
                    municipios: action.payload,
                    loading: false,
                    error: null
            }

            case types.GET_MUNICIPIOS_ERROR:
                return{
                    ...state,
                    loading: false,
                    error: action.payload,
                }
                
        
            default:
                return state;
        }
    }

