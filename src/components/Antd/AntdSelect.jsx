import { Select, Tag } from 'antd';
const { Option } = Select;


const AntdSelect = ( {placeholder, mode, items, defaultValue } ) => {


    // Select
    const onChange = (value) => {
        console.log(`selected ${value}`);
    }

    const tagRender = (props) => {
        const { label, value, closable, onClose } = props

        return (
            <Tag 
                style={{ border: "none", backgroundColor: "red"}}>
                {label}
            </Tag>
        )
    }


    return ( 
    <>
        <Select
            bordered={false}
            mode={mode}
            showSearch
            placeholder={placeholder}
            onChange={onChange}
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            
            style={{ display: 'block', borderColor: "#a9c0e4", borderRadius: "5px", cursor: "pointer"}}
            defaultValue={ mode === "multiple" ? defaultValue : {value:defaultValue}}
            // tagRender={tagRender}
        >
        { items && items.length > 0  ?
                items.map( item => (
                    <Option key={item.id} value={item.id}> {item.name ?? item.descripcion} </Option>
                ))
            :
            null
        }
        </Select>
    </>
    );
}
 
export default AntdSelect;