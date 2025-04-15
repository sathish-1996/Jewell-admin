import Category from "../../pages/Category"
import Dashboard from "../../pages/Dashobard/dashboard"
import Items from "../../pages/Items"
import SubCategory from "../../pages/SubCategory"


const routes = [
  {
    path: "/",
    name: "Dashboard",
    element: <Dashboard />, // Changed from 'component' to 'element'
  },
  {
    path: "/category",
    name: "Category",
    element: <Category />, 
  },
  {
    path: "/subcategory",
    name: "SubCategory",
    element: <SubCategory />, 
  },
  {
    path: "/items",
    name: "Items",
    element: <Items />, 
  }
];

export default routes;