import React, { useState } from 'react'
import ViewCategory from './viewCategory'
import AddCategory from './addCategory'

const Category = () => {
    const [view, setView] = useState("view")
    const [editCatgory, setEditCategory] = React.useState("")
    return (
        <div>
            {view === "view" && <ViewCategory   func={setEditCategory} viewPage={() => setView("create")} />}
            {view === "create" && <AddCategory toEdit={editCatgory} createPage={() => setView("view")} />}
        </div>
    )
}

export default Category