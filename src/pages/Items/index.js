import React, { useState } from 'react'
import ViewItems from './viewItems'
import AddItems from './createItem'

const Items = () => {
    const [view, setView] = useState("view")
    return (
        <div>
            {view === "view" && <ViewItems viewPage={() => setView("create")} />}
            {view === "create" && <AddItems createPage={() => setView("view")} />}
        </div>
    )
}

export default Items