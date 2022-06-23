import { useEffect, useRef, useState } from "react";
import { Input, Space, Table, Modal, notification } from "antd";
import { ExclamationCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsersAction } from "../../actions/userActions";
import Box from "../../components/Elements/Box";
import Avatar from "../../components/Perfil/Avatar";
import Button from "../../components/Elements/Button"
import Badge from "../../components/Elements/Badge";

const IndexUsuarios = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { confirm } = Modal;
    const users = useSelector( state => state.users.users )
    const loading = useSelector( state => state.users.loading )

    useEffect(() => {
        dispatch(getAllUsersAction())
    }, [])

    useEffect(() => {
        setDataSource(
            users.map( (item, index) => (
                {   key: index,
                    puesto:item.nombre,
                    foto: {picture: item.picture, short_name: item.short_name},
                    nombre: `${item.name} ${item.lastName} ${item.secondLastName}`,
                    puesto: item.position.nombre,
                    email: item.email,
                    acciones:item.id
                }
            ))
        )    
    }, [users])


        console.log(users);

    //Table
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
		  title: 'Estás seguro que deseas borrar este usuario?',
		  icon: <ExclamationCircleOutlined />,
		  content: 'Se borrará usuario y no se podrá recuperar',
		  okText: 'Si',
		  okType: 'danger',
		  cancelText: 'No',
	  
		  onOk() {
			// dispatch(deletePuestoAction(id))
			notification["success"]({
				message: "Eliminado",
				description: "Se ha eliminado el usuario correctamente"
			})
		  },
	  
		  onCancel() {
			console.log('Cancelado');
		  },
		});
	  };

    const columns = [
        {
          title: 'Foto',
          dataIndex: 'foto',
          key: 'foto',
          sorter: (a, b) => a.foto.localeCompare(b.foto),
          sortDirections: ['descend', 'ascend'],
          ...getColumnSearchProps("foto"),
          render: (data) => <Avatar picture={data.picture} className="p-2 w-[40px] m-auto"> {data.short_name} </Avatar>
          
        },
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre',
            sorter: (a, b) => a.nombre.localeCompare(b.nombre),
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps("nombre")
          },
          {
            title: 'Puesto',
            dataIndex: 'puesto',
            key: 'puesto',
            sorter: (a, b) => a.puesto.localeCompare(b.puesto),
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps("puesto")
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => a.email.localeCompare(b.email),
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps("email")
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
            <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 sm:col-span-1 grid grid-cols-2 gap-5">
                    <div className="col-span-2 sm:col-span-1">
                        <Box>

                        </Box>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <Box>

                        </Box>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <Box>

                        </Box>
                    </div>
                    <div className="col-span-2 sm:col-span-1 ">
                        <Box className="flex justify-between flex-wrap gap-5">
                            <Link to="/areas"><Badge fontSize="text-base" badgeSize="w-20 h-20" badgeType="primary">Áreas</Badge></Link>
                            <Link to="/departamentos"><Badge fontSize="text-base" badgeSize="w-20 h-20" badgeType="secondary">Dptos</Badge></Link>
                            <Link to="/puestos"><Badge fontSize="text-base" badgeSize="w-20 h-20" badgeType="pink">Puestos</Badge></Link>
                        </Box>
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-1 row-span-2">
                    <Box className="h-full"></Box>
                </div>

                <div className="col-span-2">
                    <Box className="overflow-auto">
                        <div className="flex my-2">
                            <Button className="ml-auto" btnType="secondary" fn={ () => navigate("/usuarios/registrar") }>
                               Nuevo Colaborador 
                            </Button>
                            
                        </div>
                        {
                            users.length > 0 && dataSource && dataSource.length > 0 ?
                                <Table 
                                    columns={columns}
                                    dataSource={dataSource} 
                                    loading={loading}
                                />
                            : ""
                        }
                    </Box>
                </div>
            </div>
        </>
     );
}
 
export default IndexUsuarios;