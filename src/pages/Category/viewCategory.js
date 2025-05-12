import React, { useEffect, useState } from 'react'
import DataTable from '../../components/Table/table';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Button } from 'react-bootstrap';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import tableConstant from "../Constant/categoryfields"
import { useNavigate } from 'react-router-dom';
import { DELETE_CATEGORY, GETALL_CATEGORY } from '../../services/ApiService';
import toast from 'react-hot-toast';


const ViewCategory = ({ viewPage, func }) => {
    const [getAllCategory, setGetAllCategory] = useState([])



    console.log(getAllCategory, "catsjssj")

    const navigate = useNavigate()
    const getAll = async () => {
        let response;
        try {
            response = await GETALL_CATEGORY()
            setGetAllCategory(response.categories)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        getAll()
    }, [])

    const handleChange = (data) => {

        viewPage()
        func(data)
    }

    const _deleteCategory = async (code) => {
        alert("sasa")
        console.log("first")
 console.log(code,"data")
        let response;

        try {
            response = await DELETE_CATEGORY(code?.id);
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
                    <div className='jewel-viewpage-header'> <MdOutlineArrowBackIosNew color='red' onClick={() => navigate("/")} /> <span>List of Category</span></div>
                    <div>
                        <Button className='jewel-app-btn-create' onClick={() => { viewPage(); func("") }}>Add Category</Button></div>
                </div>
                <DataTable cols={React.useMemo(() => [...tableConstant()], [])} data={getAllCategory} isDark bordered striped hoverable rowsPerPage={5} editRow={handleChange} deleteRow={_deleteCategory} />
            </div>
        </div>
    )
}

export default ViewCategory