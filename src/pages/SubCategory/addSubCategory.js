import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import InputField from '../../components/Input/input'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import SelectInputField from '../../components/SelectInput/selectinput'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { CREATE_SUBCATEGORY, GETALL_CATEGORY, GETALL_SUBCATEGORY, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_IMAGE } from '../../services/ApiService'
import toast from 'react-hot-toast';
const AddSubCategory = ({ toEdit, createPage }) => {
   
     const [selectField, setSelectField] = React.useState({
          categoryName: '',
          subCategoryName: '',
          subCategoryCode: '',
     });
     const [uploadIma, setUploadIma] = useState("");
     const [typing, setTyping] = React.useState(false);
     const [image, setImage] = React.useState(null);
     const [selectdata, setSelectData] = React.useState({
          name: '',
          code: '',

     });

     const [categoryType, setCategoryType] = React.useState([]);

     const _selectInput = (name, value) => {

          setTyping(false);
          setSelectData({ ...selectdata, [name]: value });
     };

     const _selectOption = (name, e) => {
          setTyping(false);
          setSelectData({ ...selectdata, [name]: e.value });
          setSelectField({ ...selectField, [name]: e });
     };

     const getCategory = async () => {

          let response;
          try {
               response = await GETALL_CATEGORY();
               console.log(response, "response")

               if (response.success === true) {

                    // const categoryNames = response.CategoryList.map((item) => item.categoryName);
                    const categoryNames = response.categories.map((item) => ({

                         label: item.name,
                         value: item.id,
                    }));

                    setCategoryType(categoryNames);

               }
          } catch (error) { }
     };

     const initialState = {
          categoryName: '',
          subCategoryName: '',
          subCategoryCode: '',
     };

     const [errorForm, setErrorForm] = React.useState(initialState);
     const handleFileChange = async (e) => {
          const file = e.target.files[0];
          if (file) {
               convertToBase64(file);
          }
     };

     const convertToBase64 = (file) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
               setUploadIma(reader.result);
          };
          reader.onerror = (error) => {
               console.error(error);
          };
     };
     const _createCategory = async () => {

          let validate = Validate();
          const imageChanged = uploadIma && uploadIma !== toEdit?.images?.url;
          let response;
          if (toEdit === '' && validate === true) {

               try {

                    response = await CREATE_SUBCATEGORY({
                         ...selectdata,
                         categoryId: selectField['categoryName'].value,
                         image: uploadIma
                    });

                    if (response.success === true) {
                         createPage(response.response);
                         toast.success(response.message);
                    } else {

                         toast.error(response.message);
                    }
               } catch (error) {
                    toast.error(error.message);
               }
          } else if (imageChanged) {
          
                      try {
                          response = await UPDATE_SUBCATEGORY_IMAGE({
                              by: "subcategory",
                              id: toEdit.id,
                              image: uploadIma
          
                          });
          
                          if (response.success === true) {
                              createPage();
                              toast.success(response.message);
                          } else {
                              toast.error(response.message);
                          }
                      } catch (error) {
                          toast.error(error.message);
                      }
                  }
           else  {

               try {
                    response = await UPDATE_SUBCATEGORY({
                         ...selectdata,
                         code: toEdit.code,
                         // categoryName:selectField["categoryName"]
                       
                    });

                    if (response.success === true) {
                         createPage();
                         toast.success(response.message);
                    } else {
                         toast.error(response.message);
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



          if (!selectdata['name']) {

               subCategoryName = 'Please enter Sub Category name';
          } else if (String(selectdata['name']).trim().length < 3) {
               subCategoryName = 'Sub Category name cannot be less than 3 character!';
          } else if (regex.test(selectdata['name'])) {
               subCategoryName = '';
          }
          if (!selectdata['code']) {
               subCategoryCode = 'Please enter Sub Category code';
          } else if (String(selectdata['code']).trim().length < 2) {
               subCategoryCode = 'Sub Category code cannot be less than 2 character!';
          } else if (regexNum.test(selectdata['code'])) {
               subCategoryCode = '';
          }

          if (toEdit === '' && !selectField['categoryName']) {
               categoryName = 'Please select Category name';
          } else if (!selectField['categoryName'] === undefined) {
               categoryName = 'Please select Category name';
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
                    Category: { id: toEdit?.Categorys?.CategoryId },
                    subCategoryName: toEdit?.subCategoryName,
                    subCategoryCode: toEdit?.subCategoryCode,
               });
               setSelectField({
                    ...selectField,
                    categoryName: { label: toEdit?.categories?.name },
               });
               setErrorForm({
                    categoryName: '',
                    subCategoryName: '',
                    subCategoryCode: '',
               });
               setUploadIma(toEdit?.images?.url)
          } else {
               setSelectData({
                    ...selectdata,
                    name:"", 
                    code:""
               });
               setUploadIma("")
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
               onClick: _createCategory,
          },
     };

     React.useEffect(() => {
          getCategory()

          if (toEdit !== '') {

               setSelectData({
                    ...selectdata,
                    id: toEdit?.id,
                    name: toEdit?.name,
                    code: toEdit?.code,
               });

               setSelectField({
                    ...selectField,
                    categoryName: { label: toEdit?.categories?.name },
               });
               setUploadIma(toEdit?.images?.url)

          }
     }, []);
     return (
          <div className='jewel-view-container'>
               <div className='jewel-view-container-inner'>
                    <div className='jewel-view-container-inner-align'>
                         <div className='jewel-viewpage-header' onClick={() => createPage()}>
                              <MdOutlineArrowBackIosNew /> <span> {toEdit !=="" ? 'Edit SubCategory' : 'Create SubCategory'}</span>
                         </div>

                    </div>


                    <div className='jewel-view-input-align'>
                         <div className='row'>
                              <div className='col-md-5'>

                                   <SelectInputField options={categoryType} value={selectField['categoryName']} keyname={"categoryName"} inputType={"string"} label={"Category Name"} placeholder={"Select Catgory"} name={"Category Name"} onChange={_selectOption} />
                                   {typing ? <div className='hr-error-text'>{errorForm.categoryName}</div> : null}
                              </div>
                              <div className='col-md-5'>

                                   <InputField value={selectdata['name']} keyname={"name"} inputType={"string"} label={"Sub Category Name"} placeholder={"Enter the Name"} name={"Sub CategoryName"} onChange={_selectInput} />
                                   {typing ? <div className='hr-error-text'>{errorForm.subCategoryName}</div> : null}
                              </div>


                         </div>
                         <div className='row'>

                              <div className='col-12 col-md-5 mb-3'>

                                   <InputField inputType={"string"} value={selectdata['code']} keyname={"code"} label={"SubCategory Code"} placeholder={"Enter the Code"} onChange={_selectInput} />
                                   {typing ? <div className='hr-error-text'>{errorForm.subCategoryCode}</div> : null}
                              </div>
                              <div className='col-12 col-md-5 jewel-view-button-col-align'>
                                   <div className='flex-jewe-container-item'>

                                        <div className='col-md-3 flex-jewe-container-outer'>

                                             <div className="flex flex-col items-center gap-4 p-4 border rounded-2xl" style={{ width: "400px" }}>
                                                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-100 transition">
                                                       <div className='flex-jewel-img-inner'>
                                                            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
                                                            {uploadIma || toEdit ? (
                                                                 <img src={uploadIma} alt="Uploaded" className="w-full h-full object-cover rounded-lg" width={"100%"} height={"100px"} />
                                                            ) : (
                                                                 <div className="flex flex-col items-center text-gray-500">
                                                                      <FaCloudUploadAlt size={40} />
                                                                      <span className="text-sm" style={{ marginLeft: "10px" }}>upload</span>
                                                                 </div>
                                                            )}
                                                       </div>
                                                  </label>

                                             </div>

                                             {uploadIma ?
                                                  <div >
                                                       <Button className="btn btn-danger" onClick={() => setUploadIma("")} style={{ color: "#fff" }}>Remove</Button>  </div> :
                                                  <div>
                                                       <div className='jewel-img-upload-text'></div>  </div>
                                             }

                                        </div>

                                   </div>
                              </div>


                         </div>
                         <div className='row'>
                                   <div className='col-md-5 jewel-view-button-col-align'>

                                   </div>
                                   <div className='col-md-5 jewel-view-button-align'>
                                        <Button className='btn btn-primary' onClick={_createCategory}>{toEdit !=="" ? 'Update' : 'Create'}</Button>
                                        <Button className='btn btn-danger' onClick={_resetData}>Cancel</Button>
                                   </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default AddSubCategory