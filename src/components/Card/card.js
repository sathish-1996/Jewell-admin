import React, { useState } from 'react'
import "./index.css"
import { useNavigate } from 'react-router-dom'
import { BiCategory } from 'react-icons/bi'
import { LiaSitemapSolid } from 'react-icons/lia'
import { TbCategoryPlus } from 'react-icons/tb'
const Card = () => {
  const navigate = useNavigate()
  const [color, setColor] = useState(["#764ba2", "#89216b"])
  const Categorylist = [{ name: "Category", icon: <BiCategory size={'25px'} />, count: "04", path: "/Category" },
  { name: "Sub Category", icon: <TbCategoryPlus size={'25px'} />, count: "02", path: "SubCategory" }, { name: "Items", icon: <LiaSitemapSolid size={'25px'} />, count: "03", path: "/items" }]
  return (
    <div className='card-deisgn-outer' >

      {Categorylist.map((x, i) => (
        <div className='card-deisgn-container' style={{ backgroundColor: color[i] }} onClick={() => navigate(x.path)}>
          <div className='card-deisgn-text-count'>  {x.count}</div>
          <div className='card-deisgn-inner-align'>
            <div className='card-deisgn-text'>  {x.name}</div>
            <div>
              {x.icon}
            </div>
          </div>
        </div>
      ))}

    </div>











  )
}

export default Card