import clientAxios from './axios';

const tokenAuth = token => {
    // const token = localStorage.getItem('token');
    if(token !== '') {
        clientAxios.defaults.headers.common['accessToken'] = `${token}`
    }else{
        delete clientAxios.defaults.headers.common['accessToken']
    }
}

export default tokenAuth