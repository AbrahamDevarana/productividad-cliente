import clientAxios from './axios';

const tokenAuth = token => {
    // const token = localStorage.getItem('token');
    if(token !== '') {
        clientAxios.defaults.headers.common['auth-token'] = `${token}`
    }else{
        delete clientAxios.defaults.headers.common['auth-token']
    }
}

export default tokenAuth