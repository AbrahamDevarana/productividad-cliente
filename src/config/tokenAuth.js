import clientAxios from './axios';

const tokenAuth = () => {
    const token = localStorage.getItem('accessToken');
    if(token !== '') {
        clientAxios.defaults.headers.common['accessToken'] = token
    }else{
        delete clientAxios.defaults.headers.common['accessToken']
    }
}

export default tokenAuth