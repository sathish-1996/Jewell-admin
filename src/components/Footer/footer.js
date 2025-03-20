import React from 'react'
import "./index.css"
import { AiFillPinterest } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { IoLogoYoutube } from 'react-icons/io'
import { PiTwitterLogo } from 'react-icons/pi'

const Footer = () => {
    return (
        <div>
            {/* <footer id="footer" class="my-5">
            <div class="container py-5 my-5">
                <div class="row">

                    <div class="col-md-3">
                        <div class="footer-menu">
                            <div className="main-logo-dik">
                                <div>
                                    <img src={'https://i.pinimg.com/736x/cd/c5/43/cdc543c56b12c9bad9cdbc45e330c833.jpg'} alt="logo" class="img-fluid" width={'70px'} style={{ borderRadius: "50px" }} />

                                </div>
                                <div>
                                    <div>Dikshi </div>
                                    <div className='main-logo-text'>Welcome  dikshi jewellery</div>
                                </div>

                            </div>
                            <div>
                                <p class="blog-paragraph fs-6 mt-3">Subscribe to our newsletter to get updates about our grand offers.</p>
                            </div>
                            <div class="social-links-footer" style={{ padding: "10px" }}>
                                <ul class="d-flex list-unstyled gap-2">
                                    <li class="social">
                                        <a href="#">
                                            <FaFacebook class="social-icon" size={25} />
                                        </a>
                                    </li>
                                    <li class="social">
                                        <a href="#">
                                            <GrInstagram class="social-icon" size={25} />
                                        </a>
                                    </li>
                                    <li class="social">
                                        <a href="#">
                                            <PiTwitterLogo class="social-icon" size={25} />
                                        </a>
                                    </li>
                                    <li class="social">
                                        <a href="#">
                                            <IoLogoYoutube class="social-icon" size={25} />
                                        </a>
                                    </li>
                                    <li class="social">
                                        <a href="#">
                                            <AiFillPinterest class="social-icon" size={25} />
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="footer-menu">
                            <h3>Quick Links</h3>
                            <ul class="menu-list list-unstyled">
                                <li class="menu-item">
                                    <a href="#" class="nav-link">Home</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#" class="nav-link">About us</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#" class="nav-link">Offer </a>
                                </li>
                                <li class="menu-item">
                                    <a href="#" class="nav-link">Services</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#" class="nav-link">Conatct Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="footer-menu">
                            <h3>Help Center</h3>
                            <ul class="menu-list list-unstyled">
                                <li class="menu-item">
                                    <a href="#" class="nav-link">FAQs</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#" class="nav-link">Payment</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#" class="nav-link">Returns & Refunds</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#" class="nav-link">Checkout</a>
                                </li>
                                <li class="menu-item">
                                    <a href="#" class="nav-link">Delivery Information</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div>
                            <h3>Our Newsletter</h3>
                            <p class="blog-paragraph fs-6">Subscribe to our newsletter to get updates about our grand offers.</p>
                            <div class="search-bar border rounded-pill border-dark-subtle px-2">
                                <form class="text-center d-flex align-items-center" action="" method="">
                                    <input type="text" class="form-control border-0 bg-transparent" placeholder="Enter your email here" />
                                    <iconify-icon class="send-icon" icon="tabler:location-filled"></iconify-icon>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </footer> */}
            <div id="footer-bottom" className='footer-bottom'>
                <div class="container">
                    {/* <hr class="m-0"/> */}
                    <div class="row mt-3">
                        <div class="col-md-12 copyright">
                            <p class="secondary-font">© 2025 Dikshi. All rights reserved.</p>
                        </div>
                        {/* <div class="col-md-6 text-md-end">
                            <p class="secondary-font">Free HTML Template by <a href="https://templatesjungle.com/" target="_blank"
                                class="text-decoration-underline fw-bold text-black-50"> TemplatesJungle</a> Distributed by <a href="https://themewagon.com/" target="_blank"
                                    class="text-decoration-underline fw-bold text-black-50"> ThemeWagon</a></p>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer