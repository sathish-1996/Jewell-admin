import React, { useMemo, useState } from "react"
import "./index.css"
import InputField from "../Input/input";
import Pagination from "../Pagination/pagination";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5";
import GlobalFilter from "../GlobalFilter/globalFilter";
const   DataTable = ({ cols, data, bordered, rowsPerPage = 5, striped, isDark }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [postPerPage, setpostPerPage] = useState(5);

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
  

    let colum = []
    for (let index = 0; index < cols.length; index++) {
        const element = cols[index];
        const data = {...element,Header : element.title,accessor:element.key}
        colum.push(data)
    }
    const columns = useMemo(
        () => colum,
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
    let valdata = searchTerm.length >= 1 ? filteredData : data
    return (
        <>
         
            <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />

            <div class="table-responsive">

                <table {...getTableProps()} className={`table ${bordered ? 'table-bordered' : 'table-borderless'} `}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()} >
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {page.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()} >
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}

                         {/* {valdata.map((item, index) => (
                            <tr key={index}>
                                {cols?.map((col, key) => (
                                    <td key={key}>{col.render(item)}</td>
                                ))}
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>

            <div style={{margin:"0px 15px 0px 0px", display:"flex", justifyContent:"flex-end"}}>
                <IoChevronBackCircleOutline onClick={() => previousPage()} disabled={!canPreviousPage} size={30} color="grey"/>
                
                <span>
                     {pageIndex + 1} of {pageCount}
                </span>
                <IoChevronForwardCircleOutline onClick={() => nextPage()} disabled={!canNextPage} size={30} color="grey"/>
                   
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