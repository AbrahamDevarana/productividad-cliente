import { Modal } from 'antd';
import { useState } from 'react';
import {AiFillEdit} from 'react-icons/ai'
import Button from '../../components/Elements/Button'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useEffect } from 'react';

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

    //Chart
    ChartJS.register(ArcElement, Tooltip, Legend);

    const dataSlice = []
    const labels = []

    if(competencias){
        competencias.forEach( item => {
            dataSlice.push(100 / competencias.length)
            labels.push(item.nombre)
        })


    }
    

    const options = {
        plugins: {
            tooltip: {
                enabled: false
            },            
            legend: {
                display: false
            },
            datalabels: {
                color: 'white',
                textAlign: 'center',
                
                font: function(context) {
                    var width = context.chart.width;
                    var size = Math.round(width / 50);
                      return {
                        size: size,
                        weight: 600
                      };
                },
                formatter: function (value, context) {
                    return context.chart.data.labels[ context.dataIndex ]
                },
            },
            
        },    
        responsive: true
    }

    const data = {
        labels: labels,
        datasets: [
            {
                backgroundColor: '#A9C0E4',
                data: dataSlice,
                label: "slices"    
            },
            
        ],
    }


    return ( 
        <>
        <div className="flex">
            <h1 className='text-lg font-medium'>Competencias</h1>
            { isAdmin ? <AiFillEdit onClick={() => showModal()} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null}
        </div>
        {
            competencias && competencias.length > 0 ?
            <>
                <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
                {/* {competencias.map( (item, i) => <p key={i}> {item.nombre} </p> )} */}
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