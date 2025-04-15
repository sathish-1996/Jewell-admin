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
    name: "category", icon: <BiCategory size={'25px'} />,

    count: "04",
    path: "/category",
    img: "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Sub Category", icon: <TbCategoryPlus size={'25px'} />, count: "02", path: "SubCategory", img: "https://images.pexels.com/photos/17834/pexels-photo.jpg",
  }, {
    name: "Items", img: "", icon: <LiaSitemapSolid size={'25px'} />, count: "03", path: "/items", img: "https://images.pexels.com/photos/6929216/pexels-photo-6929216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  }]
  return (
    <div className='card-deisgn-outer' >

      {Categorylist.map((x, i) => (
        <div className='card-deisgn-container' onClick={() => navigate(x.path)}>
          {/* <div className='card-deisgn-text-count'>  {x.count}</div> */}
          <div className='card-design-img'>
            <img src={x.img} />
          </div>
          <hr />
          <div className='card-deisgn-text'>  {x.name}</div>
          {/* <div className='card-deisgn-inner-align'>
           
            <div className='card-deisgn-text'>  {x.name}</div>

          </div> */}
        </div>
      ))}

    </div>











  )
}

export default Card