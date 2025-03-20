import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import InputField from '../../components/Input/input'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { CREATE_CATEGORY, UPDATE_CATEGORY } from '../../services/ApiService'
import toast from 'react-hot-toast';
const AddCategory = ({ toEdit, createPage }) => {
    const [category, setCategory] = useState({ name: "", code: "" })
    const [image, setImage] = useState(null);
    const initialState = {
        categoryName: '',
        categoryCode: '',
    };

    const [errorForm, setErrorForm] = React.useState(initialState);

    const [typing, setTyping] = React.useState(false);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };
    const handleData = (name, value) => {
        console.log(name, value, "value")
        setCategory({ ...category, [name]: value })

    }

    const _createCategory = async () => {
        let validate = Validate();
        let response;
        if (toEdit === '' && validate === true) {

            try {

                response = await CREATE_CATEGORY({
                    ...category,
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
                response = await UPDATE_CATEGORY({
                    ...category,
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
        let  categoryCode = '';
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

        if (categoryName !== '' ||  categoryCode !== '') {
            setErrorForm({ categoryName, categoryCode });
            setTyping(true);
            return false;
        }
        if (categoryName === '' && categoryCode === '') return true;
    };
    const _resetData = () => {
        setCategory({
            ...category,
            categoryName: toEdit.categoryName,
            categoryCode: toEdit.categoryCode,
        });
        setErrorForm({ categoryName: '', categoryCode: '' });
    };
    React.useEffect(() => {
        setCategory({
             ...category,
             categoryName: toEdit.categoryName,
             categoryCode: toEdit.categoryCode,
        });
   }, []);
    return (
        <div className='jewel-view-container'>
            <div className='jewel-view-container-inner'>
                <div className='jewel-view-container-inner-align'>
                    <div className='jewel-viewpage-header' onClick={() => createPage()}>
                        <MdOutlineArrowBackIosNew /> <span> {toEdit ? 'Edit Category' : 'Create Category'}</span>
                    </div>

                </div>
                <div className='jewel-view-input-align'>
                    <div className='row'>
                        <div className='col-md-5'>

                            <InputField value={category['name']} name={'Catgory Name'} important={true} inputType={"string"} label={"Category Name"} placeholder={"Enter the Name"} keyname={'name'} onChange={handleData} />
                            {typing ? <div className='hr-error-text'>{errorForm.categoryName}</div> : null}
                        </div>
                        <div className='col-md-5'>

                            <InputField inputType={"string"} value={category['code']} important={true} keyname={'code'} label={"Category Code"} placeholder={"Enter the Code"} onChange={handleData} />
                            {typing ? <div className='hr-error-text'>{errorForm.categoryCode}</div> : null}
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-5'>

                        </div>

                        <div style={{ height: "260px", width: "500px", marginLeft: "20px" }}>
                            <div className='flex-jewe-container-item'>

                                <div className='flex-jewe-container-outer'>

                                    <div className="flex flex-col items-center gap-4 p-4 border rounded-2xl" style={{width:"400px"}}>
                                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-100 transition">
                                            <div className='flex-jewel-img-inner'>
                                                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
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

                                    {image ?
                                        <div style={{ margin: "20px 0px 20px 20px" }}>
                                            <Button className="btn btn-danger" onClick={() => setImage(null)} style={{ color: "#fff" }}>Remove</Button>  </div> :
                                        <div style={{ margin: "20px 0px 20px 20px" }}>
                                            <div >Image upload</div>  </div>
                                    }

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-5 jewel-view-button-col-align'>

                        </div>
                        <div className='col-md-5 jewel-view-button-align'>
                            <Button className='jewel-app-btn-create' onClick={_createCategory}>Create</Button>
                            <Button className='jewel-app-btn-cancel' onClick={_resetData}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCategory