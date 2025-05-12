import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import InputField from '../../components/Input/input'
import { MdOutlineArrowBackIosNew, MdOutlineEditLocationAlt } from 'react-icons/md'
import SelectInputField from '../../components/SelectInput/selectinput'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { CREATE_ITEMS, GETALL_SUBCATEGORY, UPDATE_ITEM_IMAGE, UPDATE_ITEMS } from '../../services/ApiService'
import toast from 'react-hot-toast'
import Slider from 'react-slick'

const AddItems = ({ toEdit, createPage }) => {

    const [selectField, setSelectField] = React.useState({
        subCategoryName: '',
        purtiy: ''
    });
    const [uploadIma, setUploadIma] = useState([]);
    console.log(uploadIma, "edit")
    const [editImage, setEditimage] = useState("")
    const [addNewData, setNewData] = useState(true)
    console.log(editImage, addNewData, "idnsnansn")
    const [type, setType] = useState("")
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
        uploadImage: ''
    };

    const [errorForm, setErrorForm] = React.useState(initialState);



    const _createItems = async () => {

        let validate = Validate();
        const imageChanged = uploadIma && uploadIma !== toEdit?.imagesUrls;
        console.log(uploadIma, toEdit?.imagesUrls, imageChanged, "imageChanged`")
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
        } else if (imageChanged) {

            try {
                response = await UPDATE_ITEM_IMAGE({
                    by: "products",
                    id: toEdit?.id,
                    no: editImage !== "" ? editImage + 1 : toEdit.imagesUrls.length + 1,
                    image: editImage !== "" ? uploadIma[editImage] : uploadIma[0],
                    type: type !== "" ? "add" : ""


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
        } else {

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
    const handleFileChange = async (e) => {
        console.log("zero 1 12 3 33")
        if (!e?.target?.files?.[0]) {
            console.error("No file selected");
            return;

        }

        const file = e.target.files[0];

        if (editImage !== "" && editImage !== null && editImage !== undefined && addNewData) {
            // Editing an existing image
            console.log(file, "filesss")
            const base64 = await convertToBase64(file);
            setUploadIma((prevImages) =>
                prevImages.map((img, idx) =>

                    idx === editImage ? base64 : img
                )
            );
        } else if (editImage !== "" && !addNewData) {
            // Adding new image(s)
            console.log("mskdsdm")
            const base64 = await convertToBase64(file);
            setUploadIma(prev => [...prev, base64]); // <-- Keep existing
            setNewData(true);
        } else {

            // Uploading new images
            const files = Array.from(e.target.files);
            const base64Promises = files.map(file => convertToBase64(file));
            const base64Results = await Promise.all(base64Promises);
            setUploadIma(base64Results);
            setNewData(true)
        }
    };
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };
    const Validate = () => {

        let subCategoryName = '';
        let itemName = '';
        let itemCode = '';
        let uploadImage = ''
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
        if (!uploadIma) {
            uploadImage = 'Please Upload Image';
        }
        if (subCategoryName !== '' || itemName !== '' || itemCode !== '' ||  uploadImage !=='') {
            setErrorForm({ subCategoryName, itemName, itemCode,uploadImage });
            setTyping(true);
            return false;
        }
        if (subCategoryName === '' && itemName === '' && itemCode === '' && uploadImage === '') return true;
    };

    const _resetData = () => {

        if (toEdit !== '') {

            setSelectData({
                ...selectdata,

                name: toEdit?.name,
                code: toEdit?.code,
                model_name: toEdit?.model_name,
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

            setUploadIma(toEdit?.imagesUrls)

        }
    }, []);

    const purtiyType = [{ label: "18K", value: "purity" }, { label: "22K", value: "purity" }, { label: "24K", value: "purity" }]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div className='jewel-view-container'>
            <div className='jewel-view-container-inner'>
                <div className='jewel-view-container-inner-align'>
                    <div className='jewel-viewpage-header' onClick={() => createPage()}>
                        <MdOutlineArrowBackIosNew color='red' /> <span> Create Items</span>
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
                                        <label className="flex flex-col justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-100 transition">
                                            <div >
                                                <input
                                                    type="file"
                                                    multiple
                                                    accept='image/png,image/gif,image/jpeg'
                                                    name="uploadIma"
                                                    onChange={(e) => handleFileChange(e, toEdit !== "" ? toEdit : "")}
                                                    style={{ display: "none" }}
                                                />

                                                {uploadIma.length > 0 ? (
                                                    <Slider dots={true} infinite={false} speed={500} slidesToShow={3} slidesToScroll={3}>
                                                        {uploadIma.map((base64, index) => (
                                                            <div key={index} className="flex flex-col items-center">
                                                                <img
                                                                    src={base64}
                                                                    alt={`base64-preview-${index}`}
                                                                    className="w-24 h-24 object-cover border rounded"
                                                                />
                                                                {toEdit !== "" && (
                                                                    <div onClick={() => setEditimage(index)} className='flex flex-col justify-center items-center'>
                                                                        <MdOutlineEditLocationAlt size={20} />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </Slider>
                                                ) : (
                                                    <div className="flex flex-col items-center text-gray-500">
                                                        <FaCloudUploadAlt size={40} />
                                                        <span className="text-sm" style={{ marginLeft: "10px" }}>{typing ? <div className='hr-error-text'>{errorForm.uploadImage}</div> : "upload"}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </label>
                                    </div>

                                    {toEdit === "" && uploadIma.length > 0 ? (
                                        <div>
                                            <Button className="btn btn-danger" onClick={() => { setUploadIma([]); setNewData(false); }} style={{ color: "#fff" }}>
                                                Remove
                                            </Button>
                                        </div>
                                    ) : (
                                        <div><div className='jewel-img-upload-text'></div></div>
                                    )}
                                </div>
                            </div>
                        </div>



                    </div>


                    <div className='row'>
                        <div className='col-md-6'>

                        </div>
                        <div className='col-md-6 jewel-view-button-align'>
                            <Button className='jewel-app-btn-create' style={{ backgroundColor: "#6f86d6" }} onClick={_createItems}>{toEdit !== "" ? 'Update' : 'Create'}</Button>
                            <Button className='btn btn-danger' onClick={_resetData}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItems