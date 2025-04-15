import React, { useState } from 'react'
import ViewItems from './viewItems'
import AddItems from './createItem'

const Items = () => {
    const [view, setView] = useState("view")
     const [editSubCatgory, setEditSubCategory] = React.useState("")
    return (
        <div>
            {view === "view" && <ViewItems  func={setEditSubCategory} viewPage={() => setView("create")} />}
            {view === "create" && <AddItems toEdit={editSubCatgory} createPage={() => setView("view")} />}
        </div>
    )
}

export default Items