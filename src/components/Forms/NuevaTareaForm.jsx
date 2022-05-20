import Input from "../Input";
import Textarea from "../Textarea";
import { DatePicker, Select } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../actions/userActions";
import { useEffect } from "react";
import AntdSelect from "../Antd/AntdSelect";


const { Option } = Select;

const NuevaTareaForm = () => {

    const users = useSelector( state => state.users.users )
    const dispatch = useDispatch()

    useEffect(() => {
       
        // eslint-disable-next-line
    }, [])
    
    // DatePicker
    const { RangePicker } = DatePicker;
    const onChangeTime = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }
    
    const onOk = (value) => {
        
    }
    
    // Select
    const onChange = (value) => {
        console.log(`selected ${value}`);
      }
      
    const onSearch = (val) => {
        console.log('search:', val);
    }

    return ( 
        <>
            <form action="">
                <div className="pb-4">
                    <Input inputName="nombre" placeholder="Nombre"></Input>
                </div>
                <div className="pb-4">
                    <Textarea inputName="descripcion" placeholder="Descripción"/>
                </div>
                
                <div className="pb-4">
                <label htmlFor="" className="text-devarana-midnight text-sm pl-2 opacity-80">Periodo</label>
                <RangePicker
                    // showTime={{ format: 'HH:mm' }}
                    style={{ width: "100%", borderColor: "#a9c0e4", borderRadius: "5px"}}
                    format="DD-MM-YYYY HH:mm"
                    onChange={onChangeTime}
                    onOk={onOk} />
                </div>
                <div className="pb-4">
                    <label htmlFor="" className="text-devarana-midnight text-sm pl-2 opacity-80">Responsable</label>
                    <AntdSelect items={users} onChange={onChange}  placeholder="Selecciona Responsable"/>
                </div>
                <div className="pb-4">
                    <label htmlFor="" className="text-devarana-midnight text-sm pl-2 opacity-80">Colaboradores</label>
                    <AntdSelect items={users} onChange={onChange} mode={"multiple"} placeholder="Selecciona Colaborador"/>
                </div>

            </form>
        </>
     );
}
 
export default NuevaTareaForm;