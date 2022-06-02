import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import tareaReducer from './tareaReducer';
import userReducer from './userReducer';
import estatusReducer from './estatusReducer';
import tipoReducer from './tipoReducer';
import perspectivaReducer from './perspectivaReducer';



export default combineReducers({
    // reducers go here
    login: loginReducer,
    tareas: tareaReducer,
    users: userReducer,
    estatus: estatusReducer,
    tipoAccion: tipoReducer,
    perspectivas: perspectivaReducer
});