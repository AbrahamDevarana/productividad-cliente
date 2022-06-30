import { Modal, Popconfirm } from 'antd';
import { useState } from 'react';
import {AiFillEdit, AiFillCloseCircle} from 'react-icons/ai'
// import Button from '../../components/Elements/Button';
import {Input, Button} from 'antd';

const Valores = ({valores, isAdmin}) => {
    
    const images = require.context('../../assets/img/valores', true)
    
    const arrImg = ['ADN-DEVARANA', 'AMOR-DEVARANA', 'APASIONADAS-DEVARANA', 'EXTRAORDINARIO-DEVARANA', 'INCLUYENTES-DEVARANA', 'INNOVACION-DEVARANA', 'TRIUNFADOR-DEVARANA']

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
 
    }

    const handleDelete = (e, valor_id) => {

        
        setValores(
            arrValores.filter( item => item.id !== valor_id)
        )
    }   

    return ( 
        <>
        <div className='flex'>
            <div>
                <h1 className='text-lg font-medium'>Valores</h1>
                <p className="pt-3">¿Cómo lo hacemos?</p>
            </div>
            { isAdmin ? <AiFillEdit onClick={() => showModal()} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null}
        </div>
        {
            valores && valores.length > 0 ?
            <div className='flex flex-col'>
                {/* #each valores as valor */}
                    {valores.map( (item, i) => 
                        <div key={i} className='py-2 group'>
                                <div className='flex group-even:text-left group-odd:text-right gap-10'>
                                    <div className='group-even:order-1 group-odd:order-2 w-24'> 
                                        <img src={images(`./${arrImg[i]}.svg`)} alt="" className='w-full'/>
                                    </div>
                                    <div className='group-even:order-2 group-odd:order-1 px-2 w-auto'>
                                        <h2 className='text-devarana-pink font-bold'> {item.nombre} </h2>
                                        <p className='font-light'>{ item.descripcion} </p>
                                    </div>
                                </div>
                        </div>
                    )}
                {/* /each */}
            </div>
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