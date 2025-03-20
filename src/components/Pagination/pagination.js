import React from 'react'
import "./index.css"
const Pagination = ({ totalPage, postPerPage, setCurrentPage, currentPage }) => {
    let page = []
    for (let index = 1; index < Math.ceil(totalPage / postPerPage); index++) {
        page.push(index)

    }
    console.log(currentPage, "page index")
    return (
        <div>
            <div className='jewel-pagination-button-align'>
                {page.map((page, i) => (

                    < button key={i} onClick={() => setCurrentPage(page)} className={`${currentPage === page ? "active" : ""} `}>
                        {page}
                    </button>

                ))
                }
            </div>
        </div >
    )
}

export default Pagination