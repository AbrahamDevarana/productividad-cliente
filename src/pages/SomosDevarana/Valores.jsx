import { Modal, Popconfirm } from 'antd';
import { useState } from 'react';
import {AiFillEdit, AiFillCloseCircle} from 'react-icons/ai'
// import Button from '../../components/Elements/Button';
import {Input, Button} from 'antd';


const Valores = ({valores, isAdmin}) => {

    const [arrValores, setValores] = useState({})

    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setValores(valores)
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    

    const handleChange = (e, valor_id) => {
        setValores(
            arrValores.map( item => item.id === valor_id ? {...item, nombre : e.target.value  } : {...item})
        )
        console.log(arrValores);
    }

    const handleDelete = (e, valor_id) => {

        
        setValores(
            arrValores.filter( item => item.id !== valor_id)
        )
    }   

    return ( 
        <>
        <div className='flex'>
            <h2>Valores</h2>
            { isAdmin ? <AiFillEdit onClick={() => showModal()} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null}
        </div>
        {
            valores && valores.length > 0 ?
            <>
                {valores.map( (item, i) => <p key={i}> {item.nombre} </p> )}
            </>
            :
            null    
        }

        <Modal title="Lista de valores" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
            footer={[
                <Button onClick={handleCancel} className="mx-2"> Cancel </Button>,
                <Button onClick={handleOk} > Guardar </Button>
            ]}
        >

        {   
            arrValores && arrValores.length > 0 ?
            <>
                {arrValores.map( (item, i) => (
                    <Input.Group className='flex pb-4' key={i}>
                        <Input value={item.nombre} onChange={(e) => handleChange(e, item.id)} />
                        <Popconfirm title="Estás seguro？" okText="Si" cancelText="No" onConfirm={(e) => handleDelete(e, item.id)} >
                            <Button> X </Button>
                        </Popconfirm>
                    </Input.Group>
                ) )}
            </>
            :
            null    
        }
        </Modal>
        </>
     );
}
 
export default Valores;