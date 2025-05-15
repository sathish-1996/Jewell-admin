import React, { useState } from 'react'
import "./index.css"
import { useNavigate } from 'react-router-dom'
import { BiCategory } from 'react-icons/bi'
import { LiaSitemapSolid } from 'react-icons/lia'
import { TbCategoryPlus } from 'react-icons/tb'
const Card = () => {
  const navigate = useNavigate()
  const [color, setColor] = useState(["#764ba2", "#89216b"])
  const Categorylist = [{
    name: "Category", icon: <BiCategory size={'25px'} />,

    count: "04",
    path: "/category",
    img: "https://cdn.pixabay.com/photo/2021/10/11/23/49/app-6702044_1280.png",
  },
  {
    name: "Sub-category", 
    icon: <TbCategoryPlus size={'25px'} />, 
    count: "02", path: "SubCategory", 
    img: "https://png.pngtree.com/png-vector/20190307/ourmid/pngtree-vector-electron-icon-png-image_781152.jpg",
  }, {
    name: "Items", 
    icon: <LiaSitemapSolid size={'25px'} />, 
    count: "03", path: "/items", 
    img: "https://e7.pngegg.com/pngimages/763/532/png-clipart-electronic-engineering-computer-icons-electronics-computer-software-electronic-arts-engineering-black.png",
  }]
  return (
    <div className='card-deisgn-outer' >

      {Categorylist.map((x, i) => (
        <div className='card-deisgn-container' onClick={() => navigate(x.path)}>
          {/* <div className='card-deisgn-text-count'>  {x.count}</div> */}
          <div className='card-design-img'>
            <img src={x.img} />
          </div>
          {/* <hr /> */}
          <div className='card-deisgn-text'>  {x.name}</div>
        </div>
      ))}

    </div>











  )
}

export default Card