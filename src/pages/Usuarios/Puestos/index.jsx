import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePuestoAction, getAllPuestosAction } from "../../../actions/puestoActions";
import Box from "../../../components/Elements/Box";
import Button from "../../../components/Elements/Button";
import { Input, Space, Table, Modal, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleOutlined, SearchOutlined } from '@ant-design/icons';
const Puestos = () => {

    const { confirm } = Modal;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const puestos = useSelector( state => state.puesto.puestos)
    const loading = useSelector( state => state.puesto.loading)

    useEffect(() => {
        dispatch(getAllPuestosAction())
    }, [])

    useEffect(() => {
        setDataSource(
            puestos.map( (item, index) => (
                {key: index, puesto:item.nombre, acciones:item.id}
            ))
        )            
    }, [puestos])

    // Table
    const [dataSource, setDataSource] = useState()
    
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {    
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters, confirm) => {
        clearFilters();
        setSearchText('');
        confirm();
    };
    
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters
        }) => (
          <div
            style={{
              padding: 8
            }}
          >
            <Input
              ref={searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{
                marginBottom: 8,
                display: "block"
              }}
            />
            <Space className="justify-between flex">
              <Button
                btnType="secondary"
                fn={() => handleSearch(selectedKeys, confirm, dataIndex)}
              
              >
                Buscar
              </Button>
              <Button
                fn={() => clearFilters && handleReset(clearFilters, confirm)}
              >
                Limpiar
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? "#1890ff" : undefined
            }}
          />
        ),
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },
    });


	const showDeleteConfirm = (id) => {
		confirm({
		  title: 'Estás seguro que deseas borrar esta área?',
		  icon: <ExclamationCircleOutlined />,
		  content: 'Se borrará el área y no se podrá recuperar',
		  okText: 'Si',
		  okType: 'danger',
		  cancelText: 'No',
	  
		  onOk() {
			dispatch(deletePuestoAction(id))
			notification["success"]({
				message: "Eliminado",
				description: "Se ha eliminado el área correctamente"
			})
		  },
	  
		  onCancel() {
			console.log('Cancelado');
		  },
		});
	  };

    const columns = [
        {
          title: 'Puestos',
          dataIndex: 'puesto',
          key: 'puesto',
          sorter: (a, b) => a.puesto.localeCompare(b.puesto),
          sortDirections: ['descend', 'ascend'],
          ...getColumnSearchProps("puesto")
        },

        {
          title: 'Acciones',
          dataIndex: 'acciones',
          key: 'acciones',
          render: (id) => <div><Button btnType="edit" fn={ () => navigate(`${id}`) } /> <Button btnType="delete" fn={ () => showDeleteConfirm(id) }>Borrar </Button> </div>,
          width: 200,
        },
    ];

   
     
    return (
    <> 
        <Box>
        	<div className="flex justify-between pb-5">
				<Button btnType="primary-outline" fn={()=>navigate("/usuarios")}>
				Volver
				</Button>
				<Button btnType="secondary" fn={()=>navigate("registrar")}>
				Registrar Puesto
				</Button>
			</div>
            {
                puestos.length > 0 && dataSource && dataSource.length > 0 ?
                    <Table 
                        columns={columns}
                        dataSource={dataSource} 
                        loading={loading}
                    />
                : ""
            }
        </Box>
    </> );
}
 
export default Puestos;