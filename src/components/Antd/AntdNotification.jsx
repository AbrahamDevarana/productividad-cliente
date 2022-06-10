import { notification } from 'antd';
import { useEffect } from 'react';

const AntdNotificacion = ({errors, errorType}) => {
    useEffect(() => {
        let  descriptionText = ''
        let  message = ''
        let type = ''
        switch (errorType) {
            case 1:
                descriptionText = Object.values(errors).map( (item,key) => <p key={key}>{item.msg || item } </p>)
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