import {types} from '../types'

const initialState = {
    users: [],
    loading: true,
    error: null,
    user: null,
    searched: null,
    userSearched: null,
    profile: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_USERS:
        case types.GET_USER:
        case types.SEARCH_USER:
        case types.CREATE_USER:
        case types.GET_PROFILE:
        return {
            ...state,
            loading: true,
            user: null,
            userSearched: null,
            profile: null,
        }
        case types.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: null,
                searched: null,
                userSearched: null
            }
        case types.GET_ALL_USERS_ERROR:
        case types.UPDATE_USER_ERROR:
        case types.SEARCH_USER_ERROR:
        case types.CREATE_USER_ERROR:
        case types.ADD_RESPONSABILITY_ERROR:
        case types.GET_PROFILE_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload,
        }
        case types.GET_USER_ERROR:
            if(action.payload.status === 401){
                localStorage.removeItem('accessToken')
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
        case types.GET_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                profile: action.payload,
                searched: null,
            }
        case types.SEARCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                userSearched: action.payload,
                searched: true,
            }
        case types.UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload,
            }
        case types.CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload,
            }

        case types.ADD_RESPONSABILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: state.user.id === action.payload.user_id ? {...state.user, responsabilidades: [...state.user.responsabilidades, action.payload]} : state.user,
            }
        case types.DELETE_RESPONSABILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: state.user.id === action.payload.user_id ? {...state.user, responsabilidades: state.user.responsabilidades.filter(responsabilidade => responsabilidade.id !== action.payload.id)} : state.user,
            }

        default:
            return state
    }

}