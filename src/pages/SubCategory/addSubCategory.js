import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import InputField from '../../components/Input/input'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import SelectInputField from '../../components/SelectInput/selectinput'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { CREATE_SUBCATEGORY, UPDATE_SUBCATEGORY } from '../../services/ApiService'
import toast from 'react-hot-toast';
const AddSubCategory = ({ toEdit,createPage }) => {
   const [selectField, setSelectField] = React.useState({
          categoryName: '',
          subCategoryName: '',
          subCategoryCode: '',
     });
     
     const [typing, setTyping] = React.useState(false);
     const [image, setImage]= React.useState(null);
     const [selectdata, setSelectData] = React.useState({
          categoryName: '',
          subCategoryName: '',
          subCategoryCode: '',
     });
    
     const [DepartmentTypes, setDepartmentTypes] = React.useState([]);
   
     const _selectInput = (name, value) => {
          setTyping(false);
          setSelectData({ ...selectdata, [name]: value });
     };
     
     const _selectOption = (name, e) => {
          setTyping(false);
          setSelectData({ ...selectdata, [name]: e.value });
          setSelectField({ ...selectField, [name]: e });
     };

     // const getDepartment = async () => {
     //      let response;
     //      try {
     //           response = await GET_DEPARTMENT();
          
     //           if (response.response.success === true) {
                    
     //                // const categoryNames = response.departmentList.map((item) => item.categoryName);
     //                const categoryNames = response.response.data.map((item) => ({
                       
     //                     label: item.categoryName,
     //                     value: item.id,
     //                   }));
                     
     //                setDepartmentTypes(categoryNames);
                   
     //           }
     //      } catch (error) {}
     // };

     const initialState = {
          categoryName: '',
          subCategoryName: '',
          subCategoryCode: '',
     };

     const [errorForm, setErrorForm] = React.useState(initialState);

     const _createDesignation = async () => {
          let validate = Validate();
          let response;
          if (toEdit === '' && validate === true) {
               
               try {
                    
                    response = await CREATE_SUBCATEGORY({
                         ...selectdata,
                         categoryfield:selectField['categoryName'].value 
                    });
                  
                    if (response.response.success === true) {
                         createPage(response.response);
                         toast.success(response.response.message);
                    } else {
                         
                         toast.error(response.response.message);
                    }
               } catch (error) {
                    toast.error(error.message);
               }
          } else if (toEdit !== '' && validate === true) {
                
               try {
                    response = await UPDATE_SUBCATEGORY({
                         ...selectdata,
                         id: toEdit.id,
                         // categoryName:selectField["categoryName"]
                    });
                    
                    if (response.response.success === true) {
                         createPage();
                         toast.success(response.response.message);
                    } else {
                         toast.error(response.response.message);
                    }
               } catch (error) {
                    toast.error(error.message);
               }
          }
     };

     const Validate = () => {
          let categoryName = '';
          let subCategoryName = '';
          let subCategoryCode = '';
          var regex = /^[a-zA-Z ]*$/;
          var regexNum = /^[A-Za-z0-9_ ]*$/;

        

          if (!selectdata['subCategoryName']) {
               subCategoryName = 'Please enter designation name';
          } else if (String(selectdata['subCategoryName']).trim().length < 3) {
               subCategoryName = ' Designation name cannot be less than 3 character!';
          } else if (regex.test(selectdata['subCategoryName'])) {
               subCategoryName = '';
          }
          if (!selectdata['subCategoryCode']) {
               subCategoryCode = 'Please enter designation code';
          } else if (String(selectdata['subCategoryCode']).trim().length < 2) {
               subCategoryCode = 'Designation code cannot be less than 2 character!';
          } else if (regexNum.test(selectdata['subCategoryCode'])) {
               subCategoryCode = '';
          }

          if (toEdit === '' && !selectField['categoryName']) {
               categoryName = 'Please select department name';
          } else if (!selectField['categoryName'] === undefined) {
               categoryName = 'Please select department name';
          }

          if (categoryName !== '' || subCategoryName !== '' || subCategoryCode !== '') {
               setErrorForm({ categoryName, subCategoryName, subCategoryCode });
               setTyping(true);
               return false;
          }
          if (categoryName === '' || subCategoryName === '' || subCategoryCode === '') return true;
     };

     const _resetData = () => {
          if (toEdit !== '') {
               setSelectData({
                    ...selectdata,
                    department: { id: toEdit?.departments?.departmentId },
                    subCategoryName: toEdit?.subCategoryName,
                    subCategoryCode: toEdit?.subCategoryCode,
               });
               setSelectField({
                    ...selectField,
                    categoryName: { label: toEdit?.departments?.categoryName },
               });
               setErrorForm({
                    categoryName: '',
                    subCategoryName: '',
                    subCategoryCode: '',
               });
          } else {
               setSelectData([]);
               setSelectField({
                    ...selectField,
                    categoryName: '',
                    subCategoryName: '',
                    subCategoryCode: '',
               });
               setErrorForm({
                    categoryName: '',
                    subCategoryName: '',
                    subCategoryCode: '',
               });
          }
     };

     const BtnProps = {
          resetBtn: {
               name: 'Reset',
               bgColor: '#1b3d5f',
               width: '40%',
               textColor: '#fff',
               borderRadiusValue: '0.25rem',
               borderless: true,
               shadow: true,
               onClick: _resetData,
          },
               submitBtn: {
               name: 'Submit',
               bgColor: '#fff',
               border: '2px solid #1b3d5f',
               width: '40%',
               textColor: '#1b3d5f',
               borderRadiusValue: '0.25rem',
               // borderless: true,
               shadow: true,
               onClick: _createDesignation,
          },
     };

     React.useEffect(() => {
          // getDepartment();

          if (toEdit !== '') {
               
               setSelectData({
                    ...selectdata,
                    department: toEdit?.departments?.id ,
                    categoryName: toEdit?.departments?.categoryName,
                    subCategoryName: toEdit?.subCategoryName,
                    subCategoryCode: toEdit?.subCategoryCode,
               });
              
               setSelectField({
                    ...selectField,
                    categoryName: { label: toEdit?.departments?.categoryName },
               });
               
          }
     }, []);
    return (
        <div className='jewel-view-container'>
            <div className='jewel-view-container-inner'>
                <div className='jewel-view-container-inner-align'>
                    <div className='jewel-viewpage-header' onClick={() => createPage()}>
                        <MdOutlineArrowBackIosNew /> <span> Create SubCategory</span>
                    </div>

                </div>

               
                <div className='jewel-view-input-align'>
                    <div className='row'>
                        <div className='col-md-5'>

                            <SelectInputField value={selectdata['categoryName']} type={"string"} label={"Category Name"} placeholder={"Select Catgory"} name={"CategoryName"} onChange={_selectInput} />
                        </div>
                        <div className='col-md-5'>

                            <InputField value={selectdata['subCategoryNme']} type={"string"} label={"Sub Category Name"} placeholder={"Enter the Name"} name={"SubCategoryName"} onChange={_selectInput} />
                        </div>


                    </div>
                    <div className='row'>

                        <div className='col-md-5'>

                            <InputField type={"string"} value={selectdata['SubCategoryCode']}  label={"SubCategory Code"} placeholder={"Enter the Code"} onChange={_selectInput} />
                        </div>
                        <div className='col-md-4 jewel-view-button-col-align'>
                            <div className='flex-jewe-container-item'>

                                <div className='col-md-3 flex-jewe-container-outer'>

                                    <div className="flex flex-col items-center gap-4 p-4 border rounded-2xl shadow-lg bg-white w-64">
                                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-100 transition">
                                            <div className='flex-jewel-img-inner'>
                                                <input type="file" className="hidden" accept="image/*" onChange={"_selectInputImageChange"} style={{ display: "none" }} />
                                                {image ? (
                                                    <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-lg" width={"100%"} height={"100px"} />
                                                ) : (
                                                    <div className="flex flex-col items-center text-gray-500">
                                                        <FaCloudUploadAlt size={40} />
                                                        <span className="text-sm" style={{ marginLeft: "10px" }}>upload</span>
                                                    </div>
                                                )}
                                            </div>
                                        </label>

                                    </div>

                                    {image &&
                                        <div style={{ margin: "20px 0px 20px 20px" }}>
                                            <Button className="btn btn-dark" onClick={() => setImage(null)} style={{ color: "#fff" }}>Remove</Button>  </div>}

                                </div>

                            </div>
                        </div>


                    </div>
                    <div className='row'>
                        <div className='col-md-5 jewel-view-button-col-align'>

                        </div>
                        <div className='col-md-5 jewel-view-button-align'>
                            <Button className='btn btn-primary'>Create</Button>
                            <Button className='btn btn-danger'>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSubCategory