import React, { useState } from 'react'
import ViewSubCategory from './viewSubCategory'
import AddSubCategory from './addSubCategory'

const SubCategory = () => {
    const [view, setView] = useState("view")
     const [editSubCatgory, setEditSubCategory] = React.useState("")
    return (
        <div>
            {view === "view" && <ViewSubCategory  func={setEditSubCategory} viewPage={() => setView("create")} />}
            {view === "create" && <AddSubCategory toEdit={editSubCatgory} createPage={() => setView("view")} />}
        </div>
    )
}

export default SubCategory