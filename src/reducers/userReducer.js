import {types} from '../types'

const initialState = {
    users: [],
    loading: true,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_USERS:
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
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state
    }

}