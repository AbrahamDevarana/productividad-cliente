import { notification } from 'antd';
import { useEffect } from 'react';

const AntdNotificacion = ({errors, errorType}) => {
   
    useEffect(() => {
        console.log(Object.keys(errors).length);
        let  descriptionText = ''
        let  message = ''
        let type = ''
        let errores = errors.msg
        if(Object.keys(errors) && Object.keys(errors).length > 1 ){
            errores = Object.values(errors).map( (item, key) =>  <p key={key}>{item.msg}</p>) 
        }
        switch (errorType) {
            case 1:
                descriptionText = errores
                message = 'Error'
                type = 'error'
            break;

        }
        return ( 
            notification[type]({
            key: 1,
            message: message,
            description: descriptionText,
            })
        );
    }, [errors])
}
 
export default AntdNotificacion;