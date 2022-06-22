import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import tareaReducer from './tareaReducer';
import userReducer from './userReducer';
import estatusReducer from './estatusReducer';
import tipoReducer from './tipoReducer';
import perspectivaReducer from './perspectivaReducer';
import areaReducer from './areaReducer';
import departamentoReducer from './departamentoReducer';
import locationReducer from './locationReducer';
import somosDevaranaReducer from './somosDevaranaReducer';
import puestoReducer from './puestoReducer';


export default combineReducers({
    // reducers go here
    login: loginReducer,
    tareas: tareaReducer,
    users: userReducer,
    estatus: estatusReducer,
    tipoAccion: tipoReducer,
    perspectivas: perspectivaReducer,
    area: areaReducer,
    departamento: departamentoReducer,
    location: locationReducer,
    devarana: somosDevaranaReducer,
    puesto: puestoReducer,
});