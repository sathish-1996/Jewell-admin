import React, { useEffect, useState } from 'react'
import DataTable from '../../components/Table/table';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Button } from 'react-bootstrap';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import CategoryFields from "../Constant/categoryfields"
import { useNavigate } from 'react-router-dom';
import { DELETE_ITEMS, GETALL_ITEMS } from '../../services/ApiService';
import toast from 'react-hot-toast';
import ItemsFileds from '../Constant/itemsfield';


const ViewItems = ({ func, viewPage }) => {
    const [getAllItems, setGetAllItems] = useState([])

    const navigate = useNavigate()


    const getAll = async () => {
        let response;
        try {
            response = await GETALL_ITEMS()

            let getData = []
            for (let index = 0; index < response.products.length; index++) {
                const element = response.products[index];
                
                getData.push({ ...element, SubCategoryName: element.subcategories.name })

            }
            console.log(getData, 'getAllItems')
            setGetAllItems(getData)

        } catch (error) {
            console.log(error)
        }
    }


    const handleChange = (data) => {

        viewPage()
        func(data)
    }
    useEffect(() => {

        getAll()
    }, [])
    const _deleteCategory = async (data) => {

        let response;

        try {
            response = await DELETE_ITEMS(data.id);
            if (response.success === true) {

                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className='jewel-view-container'>
            <div className='jewel-view-container-inner'>
                <div className='jewel-view-container-inner-align'>
                    <div className='jewel-viewpage-header'> <MdOutlineArrowBackIosNew color='red' onClick={() => navigate("/")} /> <span>List of Items</span></div>
                    <div><Button className="jewel-app-btn-create" onClick={() => { viewPage(); func("") }}>Add Items</Button></div>
                </div>
                <DataTable cols={React.useMemo(() => [...ItemsFileds()], [])} data={getAllItems} isDark bordered striped hoverable rowsPerPage={5} editRow={handleChange} deleteRow={_deleteCategory} />
            </div>
        </div>
    )
}

export default ViewItems