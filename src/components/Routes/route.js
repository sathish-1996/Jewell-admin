import Category from "../../pages/Category"
import Dashboard from "../../pages/Dashobard/dashboard"
import Items from "../../pages/Items"
import SubCategory from "../../pages/SubCategory"


const routes = [
    {
      path: "/",
      name: "Dashboard",
    //   exact: true,
    
      component: Dashboard,
    },
    {
        path: "/category",
        name: "category",
        exact: true,
        pageTitle: "Jewel Admin",
        component: Category,
      },
      {
        path: "/subcategory",
        name: "subcategory",
        exact: true,
        pageTitle: "Jewel Admin",
        component: SubCategory,
      },
      {
        path: "/items",
        name: "items",
        exact: true,
        pageTitle: "Jewel Admin",
        component: Items,
      }
]

export default routes