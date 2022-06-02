import { types } from "../types";


// Obtener todas las perspectivas
export function getAllPerspectivasAccion(){
    return async (dispatch) => {
        dispatch(getAllPerspectivasRequest());
        await clientAxios.get('/perspectivas')
        .then(res => {
            dispatch(getAllPerspectivasSuccess(res.data.data))
        }).catch ( err => {
            dispatch(getAllPerspectivasError(err));
        })
    }
}

const getAllPerspectivasRequest = () => ({
    type: types.GET_ALL_PERSPECTIVAS
});

const getAllPerspectivasSuccess = payload => ({
    type: types.GET_ALL_PERSPECTIVAS_SUCCESS,
    payload
});

const getAllPerspectivasError = payload => ({
    type: types.GET_ALL_PERSPECTIVAS_ERROR,
    payload
});

// Obtener una perspectiva por id
export function getPerspectivaAccion($id){
    return async (dispatch) => {
        dispatch(getPerspectivaRequest());
        await clientAxios.get(`/perspectivas/${$id}`)
        .then(res => {
            dispatch(getPerspectivaSuccess(res.data.data))
        }).catch ( err => {
            dispatch(getPerspectivaError(err));
        })
    }
}


const getPerspectivaRequest = () => ({
    type: types.GET_PERSPECTIVA
});

const getPerspectivaSuccess = payload => ({
    type: types.GET_PERSPECTIVA_SUCCESS,
    payload
});

const getPerspectivaError = payload => ({
    type: types.GET_PERSPECTIVA_ERROR,
    payload
});

// crear nueva perspectiva
export function createPerspectivaAccion(perspectiva){
    return async (dispatch) => {
        dispatch(createPerspectivaRequest());
        await clientAxios.post('/perspectivas', perspectiva)
        .then(res => {
            dispatch(createPerspectivaSuccess(res.data.data))
        }).catch ( err => {
            dispatch(createPerspectivaError(err));
        })
    }
}

const createPerspectivaRequest = () => ({
    type: types.CREATE_PERSPECTIVA
});

const createPerspectivaSuccess = payload => ({
    type: types.CREATE_PERSPECTIVA_SUCCESS,
    payload
});

const createPerspectivaError = payload => ({
    type: types.CREATE_PERSPECTIVA_ERROR,
    payload
});

// Actualizar una perspectiva
export function updatePerspectivaAccion(perspectiva){
    return async (dispatch) => {
        dispatch(updatePerspectivaRequest());
        await clientAxios.put(`/perspectivas/${perspectiva.id}`, perspectiva)
        .then(res => {
            dispatch(updatePerspectivaSuccess(res.data.data))
        }).catch ( err => {
            dispatch(updatePerspectivaError(err));
        })
    }
}


const updatePerspectivaRequest = () => ({
    type: types.UPDATE_PERSPECTIVA
});

const  updatePerspectivaSuccess = payload => ({
    type: types.UPDATE_PERSPECTIVA_SUCCESS,
    payload
});

const updatePerspectivaError = payload => ({
    type: types.UPDATE_PERSPECTIVA_ERROR,
    payload
});

// Eliminar una perspectiva
export function deletePerspectivaAccion($id){
    return async (dispatch) => {
        dispatch(deletePerspectivaRequest());
        await clientAxios.delete(`/perspectivas/${$id}`)
        .then(res => {
            dispatch(deletePerspectivaSuccess(res.data.data))
        }).catch ( err => {
            dispatch(deletePerspectivaError(err));
        })
    }
}

const deletePerspectivaRequest = () => ({
    type: types.DELETE_PERSPECTIVA
});

const deletePerspectivaSuccess = payload => ({
    type: types.DELETE_PERSPECTIVA_SUCCESS,
    payload
});

const deletePerspectivaError = payload => ({
    type: types.DELETE_PERSPECTIVA_ERROR,
    payload
});


// Edicion de perspectiva
export function editPerspectivaAccion($id){
    return async (dispatch) => {
        dispatch(editPerspectivaRequest());
        await clientAxios.get(`/perspectivas/${$id}`)
        .then(res => {
            dispatch(editPerspectivaSuccess(res.data.data))
        }).catch ( err => {
            dispatch(editPerspectivaError(err));
        })
    }
}

const editPerspectivaRequest = () => ({
    type: types.EDIT_PERSPECTIVA
});

const  editPerspectivaSuccess = payload => ({
    type: types.EDIT_PERSPECTIVA_SUCCESS,
    payload
});

const editPerspectivaError = payload => ({
    type: types.EDIT_PERSPECTIVA_ERROR,
    payload
});

