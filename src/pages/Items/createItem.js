import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import InputField from '../../components/Input/input'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import SelectInputField from '../../components/SelectInput/selectinput'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { CREATE_ITEMS, GETALL_SUBCATEGORY, UPDATE_ITEMS } from '../../services/ApiService'
import toast from 'react-hot-toast'

const AddItems = ({ toEdit, createPage }) => {
    console.log(toEdit,"edd")
    const [selectField, setSelectField] = React.useState({
        subCategoryName: '',
        purtiy: ''
    });
    const [uploadIma, setUploadIma] = useState([]);
  
    const [typing, setTyping] = React.useState(false);

    const [selectdata, setSelectData] = React.useState({
        name: '',
        code: '',
        model_name: '',
        size: '',
        weight: '',
        stock: '',
        rate: '',
        purity: '18K',
        description: ''

    });

    const [subCategoryType, setSubCategoryType] = React.useState([]);

    const _selectInput = (name, value) => {
        console.log({ ...selectdata, [name]: value }, "sndjsdj hbhshd jbhhbjdjsh")
        setTyping(false);
        setSelectData({ ...selectdata, [name]: value });
    };

    const _selectOption = (name, e) => {
        setTyping(false);
        setSelectData({ ...selectdata, [name]: e.value });
        setSelectField({ ...selectField, [name]: e });
    };

    const getAllSubCategory = async () => {

        let response;
        try {
            response = await GETALL_SUBCATEGORY();
            console.log(response, "response")

            if (response.success === true) {


                const subCategoryNames = response.subcategories.map((item) => ({

                    label: item.name,
                    value: item.id,
                }));
                console.log(subCategoryNames, "category")

                setSubCategoryType(subCategoryNames);

            }
        } catch (error) { }
    };

    const initialState = {
        subCategoryName: '',
        itemName: '',
        itemCode: '',
    };

    const [errorForm, setErrorForm] = React.useState(initialState);
    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        const base64Promises = files.map(file => convertToBase64(file));

        const base64Results = await Promise.all(base64Promises);
        setUploadIma(base64Results);
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };
    const _createItems = async () => {

        let validate = Validate();
        let response;
        if (toEdit === '' && validate === true) {

            try {

                response = await CREATE_ITEMS({
                    ...selectdata,
                    purity: selectField['purity'].label,
                    subCategoryId: selectField['subCategoryName'].value,
                    images: uploadIma
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
        } else if (toEdit !== '' && validate === true) {

            try {
                response = await UPDATE_ITEMS({
                    ...selectdata,
                    code: toEdit.code,
                    // subCategoryName:selectField["subCategoryName"]
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
    };

    const Validate = () => {

        let subCategoryName = '';
        let itemName = '';
        let itemCode = '';
        var regex = /^[a-zA-Z ]*$/;
        var regexNum = /^[A-Za-z0-9_ ]*$/;



        if (!selectdata['name']) {

            itemName = 'Please enter Sub Category name';
        } else if (String(selectdata['name']).trim().length < 3) {
            itemName = 'Sub Category name cannot be less than 3 character!';
        } else if (regex.test(selectdata['name'])) {
            itemName = '';
        }
        if (!selectdata['code']) {
            itemCode = 'Please enter Sub Category code';
        } else if (String(selectdata['code']).trim().length < 2) {
            itemCode = 'Sub Category code cannot be less than 2 character!';
        } else if (regexNum.test(selectdata['code'])) {
            itemCode = '';
        }

        if (toEdit === '' && !selectField['subCategoryName']) {
            subCategoryName = 'Please select Category name';
        } else if (!selectField['subCategoryName'] === undefined) {
            subCategoryName = 'Please select Category name';
        }

        if (subCategoryName !== '' || itemName !== '' || itemCode !== '') {
            setErrorForm({ subCategoryName, itemName, itemCode });
            setTyping(true);
            return false;
        }
        if (subCategoryName === '' || itemName === '' || itemCode === '') return true;
    };

    const _resetData = () => {
        alert("smdmsk")
        console.log("edit zone")
        if (toEdit !== '' ) {
            console.log("edit zone1")
            setSelectData({
                ...selectdata,
             
                name: toEdit?.name,
                code: toEdit?.code,
                model_name:toEdit?.model_name,
                size: toEdit?.size,
                weight: toEdit?.weight,
                stock: toEdit?.stock,   
                rate: toEdit?.rate,
                purity: toEdit?.purity,
                description: toEdit?.description,
            });
            setSelectField({
                ...selectField,
                subCategoryName: { label: toEdit?.subcategories?.name },
            });
            setErrorForm({
                subCategoryName: '',
                itemName: '',
                itemCode: '',
            });
            setUploadIma(toEdit?.imagesUrls)
        } else {
            console.log("edit zone2")
            setSelectData({
                ...selectdata,
             
                name: '',
                code: '',
                model_name: '',
                size: '',
                weight: '',
                stock: '',
                rate: '',
                purity: '',
                description: ''
            });
            setSelectField({
                ...selectField,
                subCategoryName: '',
                purity: '',
             
            });
            setErrorForm({
                subCategoryName: '',
                itemName: '',
                itemCode: '',
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
            onClick: _createItems,
        },
    };

    React.useEffect(() => {
        getAllSubCategory()

        if (toEdit !== '') {

            setSelectData({
                ...selectdata,
                id: toEdit?.id,
                name: toEdit?.name,
                code: toEdit?.code,
                model_name: toEdit?.model_name,
                description: toEdit?.description,
                weight: toEdit?.weight,
                stock: toEdit?.stock,
                size: toEdit?.size,
                rate: toEdit?.rate,
            });

            setSelectField({
                ...selectField,
                purity: { label: toEdit?.purity },
                subCategoryName: { label: toEdit?.subcategories?.name },
            });

            setUploadIma(toEdit?.image?.url)

        }
    }, []);

    const purtiyType = [{ label: "18K", value: "purity" }, { label: "22K", value: "purity" }, { label: "24K", value: "purity" }]
    return (
        <div className='jewel-view-container'>
            <div className='jewel-view-container-inner'>
                <div className='jewel-view-container-inner-align'>
                    <div className='jewel-viewpage-header' onClick={() => createPage()}>
                        <MdOutlineArrowBackIosNew /> <span> Create Items</span>
                    </div>

                </div>


                <div className='jewel-view-input-align'>
                    <div className='row'>
                        <div className='col-md-4'>

                            <SelectInputField options={subCategoryType} value={selectField['subCategoryName']} keyname={"subCategoryName"} label={"Sub Category"} placeholder={"Select Sub Catgory"} name={"Sub Category"} onChange={_selectOption} />
                            {typing ? <div className='hr-error-text'>{errorForm.subCategoryName}</div> : null}
                        </div>
                        <div className='col-md-4'>

                            <InputField value={selectdata['name']} keyname={"name"} inputType={"string"} label={"Item Name"} placeholder={"Enter the Name"} name={"Name"} onChange={_selectInput} />
                            {typing ? <div className='hr-error-text'>{errorForm.itemName}</div> : null}
                        </div>

                        <div className='col-md-4'>

                            <InputField value={selectdata['code']} keyname={"code"} inputType={"string"} label={"Code"} placeholder={"Enter the Code"} name={"code"} onChange={_selectInput} />
                            {typing ? <div className='hr-error-text'>{errorForm.itemCode}</div> : null}
                        </div>

                    </div>
                    <div className='row'>

                        <div className='col-md-4'>

                            <InputField value={selectdata['model_name']} keyname={"model_name"} inputType={"string"} label={"Model Name"} placeholder={"Enter the Code"} name={"modelName"} onChange={_selectInput} />
                        </div>
                        <div className='col-md-4'>

                            <InputField value={selectdata['size']} keyname={"size"} inputType={"number"} label={"Size"} placeholder={"Enter the Size"} name={"size"} onChange={_selectInput} />
                        </div>
                        <div className='col-md-4'>

                            <InputField value={selectdata['weight']} keyname={"weight"} inputType={"number"} label={"Weight"} placeholder={"Enter the Weigth"} name={"Weigth"} onChange={_selectInput} />
                        </div>

                    </div>


                    <div className='row'>

                        <div className='col-md-4'>

                            <InputField value={selectdata['stock']} keyname={"stock"} inputType={"number"} label={"Stock"} placeholder={"Enter the Stock"} name={"Stock"} onChange={_selectInput} />
                        </div>
                        <div className='col-md-4'>

                            <InputField value={selectdata['rate']} keyname={"rate"} inputType={"number"} label={"Rate"} placeholder={"Enter the Rate"} name={"Rate"} onChange={_selectInput} />
                        </div>
                        <div className='col-md-4'>

                            <SelectInputField options={purtiyType} value={selectField['purity']} keyname={"purity"} inputType={"string"} label={"Purity"} placeholder={"Select Purity"} name={"Purity"} onChange={_selectOption} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>

                            <InputField value={selectdata['description']} keyname={"description"} inputType={"string"} label={"Description"} name={"Description"} onChange={_selectInput} height={"90px"} />
                        </div>
                        <div className='col-md-4'>

                            <div className='flex-jewe-container-item' style={{ padding: "0px" }}>

                                <div className='flex-jewe-container-outer'>

                                    <div className="flex flex-col items-center p-4 border rounded-2xl" style={{ width: "400px" }}>
                                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-100 transition">
                                            <div className='flex-jewel-img-inner'>
                                                <input type="file" multiple  className="hidden" accept='uploadIma/png,uploadIma/gif,uploadIma/jpeg' name="uploadIma" onChange={handleFileChange}


                                                    style={{ display: "none" }} />
                                                {uploadIma || toEdit ? (
                                                     uploadIma?.map((base64, index) => (
                                                        <img
                                                          key={index}
                                                          src={base64}   alt={`base64-preview-${index}`} className="w-24 h-24 object-cover border rounded" width={"100%"} height={"100px"} />))
                                                ) : (
                                                    <div className="flex flex-col items-center text-gray-500">
                                                        <FaCloudUploadAlt size={40} />
                                                        <span className="text-sm" style={{ marginLeft: "10px" }}>upload</span>
                                                    </div>
                                                )}
                                            </div>
                                        </label>

                                    </div>

                                    {uploadIma?.length > 0  ?
                                        <div >
                                            <Button className="btn btn-danger" onClick={() => setUploadIma('')} style={{ color: "#fff" }}>Remove</Button>  </div> :
                                        <div style={{ margin: "20px 0px 20px 20px" }}>
                                            <div className='jewel-img-upload-text'>Image upload</div>  </div>
                                    }

                                </div>


                            </div>
                        </div>
                 


                    </div>

                    <div className='row'>
                        <div className='col-md-6'>

                        </div>
                        <div className='col-md-6 jewel-view-button-align' style={{ paddingRight: "20px 20px" }}>
                            <Button className='btn btn-primary' style={{ backgroundColor: "#6f86d6" }} onClick={_createItems}>Create</Button>
                            <Button className='btn btn-danger' onClick={_resetData}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItems