import {types} from '../types'

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null,
    token: null
}


export default (state = initialState, action) => {
    switch (action.type) {

        case types.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
            
        case types.LOGIN_SUCCESS:
            localStorage.setItem('refreshToken', action.payload.refreshToken)
            localStorage.setItem('accessToken', action.payload.accessToken)
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                loading: false,
                error: null,
                token: action.payload.accessToken
            }

        case types.LOGIN_VALIDATION_SUCCESS:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                user: action.payload.user,
                loading: action.payload.isLoading,
            }
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                loading: false,
                error: action.payload,
                token: null
            }
        case types.LOGOUT_SUCCESS:
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                loading: false,
                error: null,
                token: null
            }
        
        default:
            return state
    }
}
