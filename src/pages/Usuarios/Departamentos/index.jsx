import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDepartamentoAction, getAllDepartamentosAction } from "../../../actions/departamentoActions";
import Box from "../../../components/Elements/Box";
import Button from "../../../components/Elements/Button";
import { Input, Space, Table, Modal, notification } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleOutlined } from '@ant-design/icons';
const Departamentos = () => {

    const { confirm } = Modal;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const departamentos = useSelector( state => state.departamento.departamentos)
    const loading = useSelector( state => state.departamento.loading)

    useEffect(() => {
        dispatch(getAllDepartamentosAction())
    }, [])

    useEffect(() => {
        setDataSource(
            departamentos.map( (item, index) => (
                {key: index, departamento:item.nombre, area:item.area.nombre, acciones:item.id}
            ))
        )            
    }, [departamentos])

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
			dispatch(deleteDepartamentoAction(id))
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
          title: 'Departamentos',
          dataIndex: 'departamento',
          key: 'departamento',
          sorter: (a, b) => a.departamento.localeCompare(b.departamento),
          sortDirections: ['descend', 'ascend'],
          ...getColumnSearchProps("departamento")
        },
        {
          title: 'Área',
          dataIndex: 'area',
          key: 'area',
          sorter: (a, b) => a.area.localeCompare(b.area),
          sortDirections: ['descend', 'ascend'],
          ...getColumnSearchProps("area")
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
				Registrar Departamento
				</Button>
			</div>
            {
                departamentos.length > 0 && dataSource && dataSource.length > 0 ?
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
 
export default Departamentos;