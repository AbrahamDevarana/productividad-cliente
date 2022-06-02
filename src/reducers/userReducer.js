import {types} from '../types'

const initialState = {
    users: [],
    loading: true,
    error: null,
    user: null,
    searched: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_USERS:
        case types.GET_USER:
        case types.SEARCH_USER:
            return {
                ...state,
                loading: true,
            }
        case types.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: null,
            }
        case types.GET_ALL_USERS_ERROR:
        case types.UPDATE_USER_ERROR:
        case types.SEARCH_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case types.GET_USER_ERROR:
            if(action.payload.status === 401){
                localStorage.removeItem('auth-token')
                window.location.href = '/login'
            }
            return {
                ...state,
                loading: false,
                error: action.payload.data,
            }

        case types.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload,
                searched: null,
            }
        case types.SEARCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload,
                searched: true,
            }
        case types.UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload,
            }
        default:
            return state
    }

}