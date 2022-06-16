import jwtDecode from 'jwt-decode';


export function getAccessToken() {
 const accessToken = localStorage.getItem('accessToken');
 if (!accessToken || accessToken === 'null' || accessToken === 'undefined') {
   return null;
 }

 return willExpireToken(accessToken) ? null : accessToken;
}


function willExpireToken(token) {
    const seconds = 60;
    const metaToken = jwtDecode(token);
    const { expiresIn } = metaToken;
    const now = (Date.now() + seconds) / 1000;
    return now > expiresIn;
}