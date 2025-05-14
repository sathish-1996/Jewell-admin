import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import InputField from '../../components/Input/input'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { CREATE_CATEGORY, UPDATE_CATEGORY, UPDATE_CATEGORY_IMAGE } from '../../services/ApiService'
import toast from 'react-hot-toast';
const AddCategory = ({ toEdit, createPage }) => {

    const [category, setCategory] = useState({ name: "", code: "" })
    const [uploadIma, setUploadIma] = useState("");
    console.log(uploadIma, category, 'uploadIma')
    const [uploadImaChange, setUploadImaChange] = useState();
    const initialState = {
        categoryName: '',
        categoryCode: '',
        uploadImage:''
    };

    const [errorForm, setErrorForm] = React.useState(initialState);

    const [typing, setTyping] = React.useState(false);



    const handleData = (name, value) => {
        console.log(name, value, "value")
        setCategory({ ...category, [name]: value })

    }
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
        console.log(validate,"data sbs")
        let response;
        const imageChanged = uploadIma && uploadIma !== toEdit?.images?.url;

        if (toEdit === '' && validate === true) {

            try {

                response = await CREATE_CATEGORY({
                    ...category,
                    image:uploadIma


                });

                if (response.success === true) {
                    createPage(response.response);
                    toast.success(response.message);
                } else {

                    toast.error(response.response.message);
                }
            } catch (error) {
                toast.error(error.message);
            }
        } else if (imageChanged) {

            try {
                response = await UPDATE_CATEGORY_IMAGE({
                    by: "category",
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
        } else if (toEdit !== '') {

            try {
                response = await UPDATE_CATEGORY({
                    ...category,
                    code: category.code,
                    // image: uploadIma

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
        let categoryCode = '';
          let uploadImage = '';
        var regex = /^[a-zA-Z ]*$/;
        var regexNum = /^[A-Za-z0-9_ ]*$/;


        if (!category['name']) {

            categoryName = 'Please enter Category name';
        } else if (String(category['name']).trim().length < 3) {
            categoryName = ' Category name cannot be less than 3 character!';
        } else if (regex.test(category['name'])) {
            categoryName = '';
        }
        if (!category['code']) {
            categoryCode = 'Please enter Category code';
        } else if (String(category['code']).trim().length < 2) {
            categoryCode = 'Category code cannot be less than 2 character!';
        } else if (regexNum.test(category['code'])) {
            categoryCode = '';
        }
         if (!uploadIma) {
            uploadImage = 'Please Upload Image';
        } 

        if (categoryName !== '' || categoryCode !== '' || uploadImage !=='') {
           
            setErrorForm({ categoryName, categoryCode,uploadImage });
            setTyping(true);
            return false;
        }
        if (categoryName === '' && categoryCode === '' && uploadImage === '') return true;
    };
  
    const _resetData = () => {
        if (toEdit !== "") {
            setCategory({
                ...category,
                name: toEdit?.name,
                code: toEdit?.code,
            });
        } else {
            setCategory({
                ...category,
                name: "",
                code: "",
            });
            setUploadIma("")
            setErrorForm({ categoryName: '', categoryCode: '',uploadImage:'' });
        }

    };
    React.useEffect(() => {

        setCategory({
            ...category,
            name: toEdit?.name,
            code: toEdit?.code
        });
        setUploadIma(toEdit?.images?.url)
    }, []);
    return (
        <div className='jewel-view-container'>
            <div className='jewel-view-container-inner'>
                <div className='jewel-view-container-inner-align'>
                    <div className='jewel-viewpage-header' onClick={() => createPage()}>
                        <MdOutlineArrowBackIosNew color='#07183b'/> <span> {toEdit !== "" ? 'Edit Category' : 'Create Category'}</span>
                    </div>

                </div>
                <div className='jewel-view-input-align'>
                    <div className='row'>
                        <div className='col-12 col-md-5 mb-3'>

                            <InputField value={category['name']} name={'Catgory Name'} important={true} inputType={"string"} label={"Category Name"} placeholder={"Enter the Name"} keyname={'name'} onChange={handleData} />
                            {typing ? <div className='hr-error-text'>{errorForm.categoryName}</div> : null}
                        </div>
                        <div className='col-12 col-md-5 mb-3'>

                            <InputField inputType={"string"} value={category['code']} important={true} keyname={'code'} label={"Category Code"} placeholder={"Enter the Code"} onChange={handleData} />
                            {typing ? <div className='hr-error-text'>{errorForm.categoryCode}</div> : null}
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-5'>

                        </div>
                        <div className='col-12 col-md-6'>
                            <div style={{ maxWidth: "100%", width: "100%" }}>
                                <div className='flex-jewe-container-item' style={{flexDirection:"column"}}>

                                    <div className='flex-jewe-container-outer'>

                                        <div className="flex flex-col items-center gap-4 p-4 border rounded-2xl" style={{ width: "400px" }}>
                                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-100 transition">
                                                <div className='flex-jewel-img-inner'>
                                                    <input type="file" className="hidden" accept='uploadIma/png,uploadIma/gif,uploadIma/jpeg' name="uploadIma" onChange={handleFileChange}


                                                    />
                                                    
                                                    {uploadIma || toEdit ? (
                                                        <img src={uploadIma} alt="Uploaded" className="w-full h-full object-cover rounded-lg" style={{ maxHeight: "200px", objectFit: "cover" }} />
                                                    ) : (
                                                        <div className="flex flex-col items-center text-gray-500">
                                                            <FaCloudUploadAlt size={40} />
                                                            <span className="text-sm" style={{ marginLeft: "10px" }}>{typing ? <div className='hr-error-text'>{errorForm.uploadImage}</div> : "upload"}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </label>

                                        </div>
                                    </div>
                                    {uploadIma ?
                                        <div >
                                            <Button className="btn btn-danger" onClick={() => setUploadIma(null)} style={{ color: "#fff" }}>Remove</Button>  </div> :
                                        <div >
                                            <div className='jewel-img-upload-text'></div>  </div>
                                    }

                                </div>
 
                            </div>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-5 jewel-view-button-col-align'>

                        </div>
                        <div className='col-md-5 d-flex flex-column flex-md-row gap-2 jewel-view-button-align'>
                            <Button className='jewel-app-btn-create' onClick={_createCategory}>{toEdit !== "" ? 'Update' : 'Create'}</Button>
                            <Button className='jewel-app-btn-cancel' onClick={_resetData}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCategory