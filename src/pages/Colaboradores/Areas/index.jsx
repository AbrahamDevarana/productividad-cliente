import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAreasAction } from "../../../actions/areaActions";
import Box from "../../../components/Elements/Box";
import { Button, Input, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const Areas = () => {
    
    const dispatch = useDispatch()
    const areas = useSelector( state => state.area.areas)
    const loading = useSelector( state => state.area.loading)

    useEffect(() => {
        dispatch(getAllAreasAction())
    }, [])

    useEffect(() => {
        setDataSource(
            areas.map( (item, index) => (
                {key: index, area:item.nombre, acciones:item.id}
            ))
        )            
    }, [areas])

    // Table
    const [dataSource, setDataSource] = useState()
    const [ areaFilter , setAreaFilter] = useState()
    
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        // setSearchText(selectedKeys[0]);
        // setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
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
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{
                  width: 90
                }}
              >
                Search
              </Button>
              <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{
                  width: 90
                }}
              >
                Reset
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


    const columns = [
        {
          title: 'Áreas',
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
          render: (data) => <div><button onClick={ () => console.log(data) }>Editar </button> <button onClick={ () => console.log(data) }>Borrar </button> </div>
        },
    ];

   
     
    return (
    <> 
        <Box>
            {
                areas.length > 0 && dataSource && dataSource.length > 0 ?
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
 
export default Areas;