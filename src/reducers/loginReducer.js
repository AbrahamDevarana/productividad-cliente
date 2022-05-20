import {types} from '../types'

const initialState = {
    isLogged: false,
    user: null,
    loading: true,
    error: null,
    token: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            localStorage.setItem('Bearer', action.payload.token)
            return {
                ...state,
                isLogged: true,
                user: action.payload,
                loading: false,
                error: null,
                token: `Bearer ${action.payload.access_token}`
            }

        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLogged: false,
                user: null,
                loading: false,
                error: action.payload,
                token: null
            }
        case types.LOGOUT:
            localStorage.removeItem('Bearer')
            return {
                ...state,
                isLogged: false,
                user: null,
                loading: false,
                error: null,
                token: null
            }
        
        default:
            return state
    }
}