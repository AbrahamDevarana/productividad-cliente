import clientAxios from './axios';

const tokenAuth = token => {
    // const token = localStorage.getItem('token');
    if(token !== '') {
        clientAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }else{
        delete clientAxios.defaults.headers.common['Authorization']
    }
}

export default tokenAuth