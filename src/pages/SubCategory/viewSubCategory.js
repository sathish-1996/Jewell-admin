import React, { useState, useEffect } from 'react'
import DataTable from '../../components/Table/table';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Button } from 'react-bootstrap';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import CategoryFields from "../Constant/categoryfields"
import SubCategoryFields from '../Constant/subcategoryfield';
import { useNavigate } from 'react-router-dom';
import { DELETE_SUBCATEGORY, GETALL_SUBCATEGORY } from '../../services/ApiService';
import toast from 'react-hot-toast';


const ViewSubCategory = ({ viewPage,func }) => {

    const [getAllSubCategory, setGetAllSubCategory] = useState([])
    console.log(getAllSubCategory, 'getAllSubCategory')
    const navigate = useNavigate()
  

    const getAll = async () => {
        let response;
        try {
            response = await GETALL_SUBCATEGORY()
            let getData = []
            for (let index = 0; index < response.subcategories.length; index++) {
                const element = response.subcategories[index];
                getData.push({ ...element, CategoryName: element.categories.name })

            }
            setGetAllSubCategory(getData)

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

        const _deleteCategory = async (data) => {
            console.log(data,"data")
             
            let response;
    
            try {
                 response = await DELETE_SUBCATEGORY(data.code);
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
                    <div className='jewel-viewpage-header'> <MdOutlineArrowBackIosNew color='red' onClick={() => navigate("/")} /> <span>List of Sub-category</span></div>
                    <div><Button className="jewel-app-btn-create" onClick={() => {viewPage(); func("")}}>Add Sub-Category</Button></div>
                </div>
                <DataTable cols={React.useMemo(() => [...SubCategoryFields()], [])}  data={getAllSubCategory} isDark bordered striped hoverable rowsPerPage={5} editRow={handleChange} deleteRow={_deleteCategory}/>
            </div>
        </div>
    )
}

export default ViewSubCategory