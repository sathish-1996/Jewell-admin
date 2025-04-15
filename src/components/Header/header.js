import React from 'react'
import "./index.css"
import images from "../../components/images/purelogo-removebg-preview.png";
import { Navigate, useNavigate } from 'react-router-dom'
import { BiUser } from 'react-icons/bi';
import { CiHeart } from 'react-icons/ci';
import { IoCarSportOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { MdZoomOutMap } from 'react-icons/md';

const Header = () => {
    // const items = useSelector(state => state.items);
    const navigate = useNavigate()
    return (
        <React.Fragment>

            <div className="jewell-header-outer">
                <div className="jewell-header-icon">
                    <div className="jewell-header-icon-font-header">
                        <img src={images} alt={"header"} width={"50px"} />
                    </div>
                    <div className='jewell-header-text-align'>
                        <div className="jewell-header-icon-font-header">Pure Silver </div>
                        <div className="jewell-header-icon-font" style={{textAlign:"center"}}> World Famous jewellery</div>
                    </div>
                </div>
                <div className="jewell-header-icon-font-header-1">
                    {/* <input  type='text' /> */}
                    Welcome to admin dashboard
                </div>
                <div className="jewell-header-outer-icon">
                   

                    <MdZoomOutMap size={25} color="#fff" />

                    <div className="jewell-header-cart-icon-outer">
                        <div>
                            <CgProfile size={25} color="#fff" />
                        </div>
                        {/* {items.map((x, index) => (
            <div className="jewell-header-cart-icon">
              {index + 1}
            </div>
          ))} */}


                    </div>

                    {/* <FiMenu size={30} color="#fff" /> */}
                </div>
            </div>






        </React.Fragment>
    )

}

export default Header