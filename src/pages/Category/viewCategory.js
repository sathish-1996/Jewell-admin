import React from 'react'
import DataTable from '../../components/Table/table';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Button } from 'react-bootstrap';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import tableConstant from "../Constant/categoryfields"
import { useNavigate } from 'react-router-dom';

export const data = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "category": "Gold Coin",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "country": "GCN",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "category": "Braclete",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "country": "BRCL",
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "category": "Necklace",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "country": "NLC",
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "category": "Chain",
        "email": "Julianne.OConner@kory.org",
        "phone": "493-170-9623 x156",
        "country": "CHN",
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "category": "Earings",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "(254)954-1289",
        "country": "ERN",
    },
    {
        "id": 6,
        "name": "Leanne Graham",
        "category": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "country": "hildegard.org",
    },
    {
        "id": 7,
        "name": "Ervin Howell",
        "category": "Antonette",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "country": "anastasia.net",
    },
    {
        "id": 8,
        "name": "Clementine Bauch",
        "category": "Samantha",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "country": "ramiro.info",
    },
    {
        "id": 9,
        "name": "Patricia Lebsack",
        "category": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "phone": "493-170-9623 x156",
        "country": "kale.biz",
    },
    {
        "id": 10,
        "name": "Chelsey Dietrich",
        "category": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "(254)954-1289",
        "country": "demarco.info",
    },
]
const ViewCategory = ({ viewPage }) => {

    const navigate = useNavigate()
    const updateData = {
        title: 'Action',
        key: 'action',
        render: rowData => {
            return (
                <div className='category-icon-align'>
                    <BiSolidEdit size={20} color='blue' />
                    <RiDeleteBin6Line size={20} color='red' />
                </div>
            )
        },
    }

    return (
        <div className='jewel-view-container'>
            <div className='jewel-view-container-inner'>
                <div className='jewel-view-container-inner-align'>
                    <div className='jewel-viewpage-header'> <MdOutlineArrowBackIosNew onClick={() => navigate("/")}/> <span>List of Category</span></div>
                    <div><Button className='jewel-app-btn-create'  onClick={() => viewPage()}>Create</Button></div>
                </div>
                <DataTable cols={React.useMemo(() => [...tableConstant(), updateData], [])} data={data} isDark bordered striped hoverable rowsPerPage={5} />
            </div>
        </div>
    )
}

export default ViewCategory