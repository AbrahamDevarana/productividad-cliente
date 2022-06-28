import { Modal } from 'antd';
import { useState } from 'react';
import {AiFillEdit} from 'react-icons/ai'
import Button from '../../components/Elements/Button';

const Competencias = ({competencias, isAdmin}) => {

    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return ( 
        <>
        <div className="flex">
            <h2>Competencias</h2>
            { isAdmin ? <AiFillEdit onClick={() => showModal()} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null}
        </div>
        {
            competencias && competencias.length > 0 ?
            <>
                {competencias.map( (item, i) => <p key={i}> {item.nombre} </p> )}
            </>
            :
            null    
        }

        <Modal title="Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
            footer={[
                <Button fn={handleCancel} btnType="primary-outline" className="mx-2"> Cancel </Button>,
                <Button fn={handleOk} btnType="primary"> Guardar </Button>
            ]}
        >
        </Modal>
        </>
        
     );
}
 
export default Competencias;