import React, { useMemo, useState } from "react"
import "./index.css"
import InputField from "../Input/input";
import Pagination from "../Pagination/pagination";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5";
import GlobalFilter from "../GlobalFilter/globalFilter";
import { BiSolidEdit, BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
const   DataTable = ({ cols, data, bordered, rowsPerPage = 5, editRow, deleteRow }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [activeBtn, setActiveBtn] = useState({ active: true, inActive: false });
    const [postPerPage, setpostPerPage] = useState(5);
    const [rowData, setRowData] = useState([]);
    const lastIndex = currentPage * postPerPage
    const firstIndex = lastIndex - postPerPage
    const currentPost = data.slice(firstIndex, lastIndex)


    // Filtered data based on search term
    const filteredData = useMemo(() => {
        return data.filter((item) =>
            Object.values(item).some((val) =>
                String(val).toLowerCase().includes(searchTerm?.toLowerCase())
            )
        );
    }, [searchTerm, data]);


    let column = []
    const del = [{ title: "name" }, { title: "email" }, { title: "password" }]
    for (var index = 0; index < cols.length; index++) {
        const element = cols[index];

        const data = { ...element, Header: element.title, accessor: element.key }

        column.push(data)

    }



    const columns = useMemo(
        () => column,
        []
    );
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        nextPage,
        previousPage,
        pageCount,
        gotoPage,
        state: { pageIndex, globalFilter },
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 5 }, // Show 5 rows per page
        },
        useGlobalFilter, // Enables search filtering
        usePagination // Enables pagination
    );

    return (
        <>

            <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />

            <div class="table-responsive">

                <table {...getTableProps()} className={`table ${bordered ? 'table-bordered' : 'table-borderless'} `}>
                    <thead>
                        {headerGroups?.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                 <th>S.NO</th>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()} >
                                        {column.render("Header")}
                                    </th>

                                ))}
                                <th>Actions</th>
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {page?.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    <td>
                                        <div className='category-icon-align'>
                                            {row.index + 1}
                                        </div>
                                    </td>
                                    {row?.cells?.map((cell) => (
                                        <td {...cell.getCellProps()} >
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                    <td>
                                        <div className='category-icon-align'>
                                            <BiSolidEditAlt size={18} color='blue' onClick={() => editRow(row.original)} />
                                            <RiDeleteBin6Line size={18} color='red' onClick={() => deleteRow(row.original)} />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>

            <div style={{ margin: "0px 15px 0px 0px", display: "flex", justifyContent: "flex-end", cursor: "pointer" }}>
                <IoChevronBackCircleOutline onClick={() => { previousPage(); setActiveBtn({ ...activeBtn, active: true, inActive: false }) }} disabled={!canPreviousPage} size={30} color="grey" className={activeBtn.active ? "jewel-pagination-btn-active" : "ewel-pagination-btn-inactive"} />

                <span>
                    {pageIndex + 1} of {pageCount}
                </span>
                <IoChevronForwardCircleOutline onClick={() => { nextPage(); setActiveBtn({ ...activeBtn, inActive: true, active: false }) }} disabled={!canNextPage} size={30} color="grey" className={activeBtn.inActive ? "jewel-pagination-btn-active" : "ewel-pagination-btn-inactive"} />

                {/* <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0;
                        gotoPage(page);
                    }}
                    style={{ width: "50px", marginLeft: "10px" }}
                /> */}
            </div>

        </>
    )
}

export default DataTable