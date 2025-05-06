import React, { useEffect, useRef, useState } from 'react'
import "./index.css"
import images from "../../components/images/purelogo-removebg-preview.png";
import { Navigate, useNavigate } from 'react-router-dom'
import { BiUser } from 'react-icons/bi';
import { CiHeart } from 'react-icons/ci';
import { IoCarSportOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { MdZoomOutMap } from 'react-icons/md';

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const menuRef = useRef();
    const navigate = useNavigate()
    // const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setToggle(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);
    return (
        <React.Fragment>

            <div className="jewell-header-outer">
                <div className="jewell-header-icon">
                    <div className="jewell-header-icon-font-header">
                        <img src={images} alt={"header"} width={"50px"} />
                    </div>
                    <div className='jewell-header-text-align'>
                        <div className="jewell-header-icon-font-header">Pure Silver India</div>
                        <div className="jewell-header-icon-font" style={{ textAlign: "center" }}> World famous Jewellery</div>
                    </div>
                </div>  
                <div className="jewell-header-icon-font-header-1">
                    {/* <input  type='text' /> */}
                    Welcome to Admin Dashboard
                </div>
                <div className="jewell-header-outer-icon">


                    <MdZoomOutMap size={25} color="#fff" />

                    <div className="jewell-header-cart-icon-outer">
                        <div className='jewell-header-prof relative inline-block text-left'  ref={menuRef}>
                            <CgProfile size={25} color="#fff" onClick={() => setToggle(!toggle)} />
                            {toggle && (
                                < div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10" style={{top:"20px", width:"130px", borderBottom:"1px solid"}}>
                                  
                                <div  className="block px-4 py-2 hover:bg-gray-100">Settings</div>
                              
                                <div  className="block px-4 py-2 hover:bg-gray-100">Profile</div>
                                <div
                                  onClick={() => {
                                    // handle logout logic here
                                    navigate('/login');
                                  }}
                                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                  Logout
                                </div>
                              </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>






        </React.Fragment>
    )

}

export default Header