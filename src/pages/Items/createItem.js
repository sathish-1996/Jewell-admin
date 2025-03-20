import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import InputField from '../../components/Input/input'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import SelectInputField from '../../components/SelectInput/selectinput'
import { FaCloudUploadAlt } from 'react-icons/fa'

const AddItems = ({ createPage }) => {
    const [subCategory, setSubCategory] = useState({ Categoryname: "", subCategoryName: "", code: "" })
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };
    const handleData = (name, value) => {
        console.log(name, value, "value")
        setSubCategory({ subCategoryName: value, code: value })

    }
    return (
        <div className='jewel-view-container'>
            <div className='jewel-view-container-inner'>
                <div className='jewel-view-container-inner-align'>
                    <div className='jewel-viewpage-header' onClick={() => createPage()}>
                        <MdOutlineArrowBackIosNew /> <span> Create Items</span>
                    </div>

                </div>

                {/* <div className='flex-jewe-container'>
                    
                    <div className='col-md-3 flex-jewe-container-outer'>

                        <div className="flex flex-col items-center gap-4 p-4 border rounded-2xl shadow-lg bg-white w-64">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-100 transition">
                                <div className='flex-jewel-img-inner'>
                                    <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
                                    {image ? (
                                        <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-lg" width={"100%"} height={"100px"} />
                                    ) : (
                                        <div className="flex flex-col items-center text-gray-500">
                                            <FaCloudUploadAlt size={40} />
                                            <span className="text-sm" style={{marginLeft:"10px"}}>upload</span>
                                        </div>
                                    )}
                                </div>
                            </label>

                        </div>
                       
                            {image && 
                             <div style={{ margin: "20px 0px 20px 20px" }}>
                            <Button className="btn btn-dark" onClick={() => setImage(null)} style={{ color: "#fff" }}>Remove</Button>  </div>}
                       
                    </div>

                </div> */}
                <div className='jewel-view-input-align'>
                    <div className='row'>

                        <div className='col-md-4'>

                            <InputField value={subCategory['SubCategoryname']} type={"string"} label={"Item Name"} placeholder={"Enter the Name"} name={"SubCategoryName"} onChange={handleData} />
                        </div>
                        <div className='col-md-4'>

                            <SelectInputField value={subCategory['CategoryName']} type={"string"} label={"Sub Group"} placeholder={"Select Catgory"} name={"Sub Group"} onChange={handleData} />
                        </div>
                        <div className='col-md-4'>

                            <InputField value={subCategory['SubCategoryname']} type={"string"} label={"Design No"} placeholder={"Enter the Name"} name={"SubCategoryName"} onChange={handleData} />
                        </div>
                    </div>
                    <div className='row'>

                        <div className='col-md-4'>

                            <InputField value={subCategory['SubCategoryname']} type={"string"} label={"Design Name"} placeholder={"Enter the Name"} name={"SubCategoryName"} onChange={handleData} />
                        </div>
                        <div className='col-md-4'>

                            <SelectInputField value={subCategory['CategoryName']} type={"string"} label={"Purity Name"} placeholder={"Select Catgory"} name={"Purity Name"} onChange={handleData} />
                        </div>
                        <div className='col-md-4'>

                            <SelectInputField value={subCategory['SubCategoryname']} type={"string"} label={"Color"} placeholder={"Enter the Name"} name={"Color"} onChange={handleData} />
                        </div>
                    </div>
                    <div className='row'>

                        <div className='col-md-4'>

                            <SelectInputField value={subCategory['SubCategoryname']} type={"string"} label={"Size"} placeholder={"Enter the Name"} name={"Size"} onChange={handleData} />
                        </div>
                        <div className='col-md-4'>

                            <InputField value={subCategory['CategoryName']} type={"string"} label={"Weight"} placeholder={"Select Catgory"} name={"CategoryName"} onChange={handleData} />
                        </div>
                        <div className='col-md-4'>

                            <InputField value={subCategory['SubCategoryname']} type={"string"} label={"VA%"} placeholder={"Enter the Name"} name={"SubCategoryName"} onChange={handleData} />
                        </div>
                    </div>
                    <div className='row'>

                        <div className='col-md-4'>

                            <InputField value={subCategory['SubCategoryname']} type={"string"} label={"VA Gms"} placeholder={"Enter the Name"} name={"SubCategoryName"} onChange={handleData} />
                        </div>
                        <div className='col-md-4'>

                            <InputField value={subCategory['CategoryName']} type={"string"} label={"Mc"} placeholder={"Select Catgory"} name={"CategoryName"} onChange={handleData} />
                        </div>
                        <div className='col-md-4'>

                            <InputField value={subCategory['SubCategoryname']} type={"string"} label={"Others"} placeholder={"Enter the Name"} name={"SubCategoryName"} onChange={handleData} />
                        </div>

                    </div>
                    <div className='row'>

                        <div className='col-md-4'>

                            <InputField value={subCategory['SubCategoryname']} type={"string"} label={"Stone Charge"} placeholder={"Enter the Name"} name={"SubCategoryName"} onChange={handleData} />
                        </div>
                        <div className='col-md-4'>

                            <InputField value={subCategory['CategoryName']} type={"string"} label={"Rate"} placeholder={"Select Catgory"} name={"CategoryName"} onChange={handleData} />
                        </div>
                        <div className='col-md-4'>

                            <InputField value={subCategory['SubCategoryname']} type={"string"} label={"Description"} placeholder={"Enter the Name"} name={"SubCategoryName"} onChange={handleData} />
                        </div>
                    </div>
                    <div className='row'>

                        <div className='col-md-4'>

                            <InputField value={subCategory['SubCategoryname']} type={"string"} label={"Description"} name={"Description"} onChange={handleData} height={"100px"} />
                        </div>
                        <div className='col-md-4' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                            <div>Type:</div>
                            <div className='col-md-5'>

                                <input type="radio" value="Instock" name="gender" /> InStock

                            </div>
                            <div className='col-md-5'>


                                <input type="radio" value="OutStock" name="gender" /> OutStock
                            </div>
                        </div>
                        <div className='col-md-2 jewel-view-button-col-align'>
                            <div className='flex-jewe-container-item'>

                                <div className='col-md-3 flex-jewe-container-outer'>

                                    <div className="flex flex-col items-center gap-4 p-4 border rounded-2xl shadow-lg bg-white w-64">
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

                                    {image &&
                                        <div style={{ margin: "20px 0px 20px 20px" }}>
                                            <Button className="btn btn-dark" onClick={() => setImage(null)} style={{ color: "#fff" }}>Remove</Button>  </div>}

                                </div>

                            </div>
                        </div>
                        <div className='col-md-2 jewel-view-button-col-align'>
                            <div className='flex-jewe-container-item'>

                                <div className='col-md-3 flex-jewe-container-outer'>

                                    <div className="flex flex-col items-center gap-4 p-4 border rounded-2xl shadow-lg bg-white w-64">
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

                                    {image &&
                                        <div style={{ margin: "20px 0px 20px 20px" }}>
                                            <Button className="btn btn-dark" onClick={() => setImage(null)} style={{ color: "#fff" }}>Remove</Button>  </div>}

                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-md-6'>

                        </div>
                        <div className='col-md-6 jewel-view-button-align' style={{ paddingRight: "20px 20px" }}>
                            <Button className='btn btn-primary' style={{backgroundColor:"#6f86d6"}}>Create</Button>
                            <Button className='btn btn-danger'>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItems