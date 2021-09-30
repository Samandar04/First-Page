import React, { useState,userEffect, Component } from 'react'
import "./main.scss"
import Img5 from "./img/watch.png"
import "animate.css"
import Img1 from "./img/logo.png"
import Img2 from "./img/search.svg"
import Img3 from "./img/user.svg"
import Img4 from "./img/shopping-cart.svg"
import {Link} from "react-router-dom"
import { computeHeadingLevel } from '@testing-library/react'
import { Navs } from './styled'
import Body from './body'

function Navbar () {
    
    const [Navbar, setNavbar] = useState(false)
    const scrollEvent = () => {
        if (window.pageYOffset > 400) {
            setNavbar(true)
        } else {
            setNavbar(false)
        };
    }


        return (
            <>
            <nav sticked={Navbar}  className="navs" style={{backgroundColor:"transparent"}}>
                <div className="nav-flex">
                    <div className="logo">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="list">
                        <ul className="list">
                            <li>
                            <Link to="/">Home</Link>
                                
                            </li>
                            <li>
                            <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                            <Link to="/about">About</Link>
                            </li>
                            {/* <li>
                                <a href="">
                                    <div class="dropdown">
                                        <button class="dropbtn">Latest</button>
                                        <div class="dropdown-content">
                                        <Link to="/">ProductList</Link>

                                          <Link to="/">Product Detalis</Link>
                                        </div>
                                    </div>
                                </a>
                            </li> */}
                            <li>
                                <a href="#"><div class="dropdown">
                                    <button class="dropbtn"><Link to="/blog">Blog</Link></button>
                                    <div class="dropdown-content">
                                        <a href="#"><Link to="/blog"> Blog</Link></a>
                                        <a href="#"><Link to="/detalis"> Blog Detalis</Link></a>

                                    </div>
                                </div></a>
                            </li>
                            <li>
                                <a href="#"><div class="dropdown">
                                    <button class="dropbtn"><Link to="/detalis"> Pages </Link></button>
                                    <div class="dropdown-content">
                                        <a href="#"><Link to="/login"> Login</Link> </a>
                                        <a href="#">Cart</a>
                                        <a href="#">Element</a>
                                        <a href="#">Confirmation</a>
                                        <a href="#">Product Checkout</a>
                                    </div>
                                </div></a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>

                        </ul>
                    </div>
                    <div className="nav-icon">
                        <div className="nav-img">
                            <img src={Img2} alt="" />
                        </div>
                        <div className="nav-img">
                            <img src={Img3} alt="" />
                        </div>
                        <div className="nav-img">
                            <img src={Img4} alt="" />
                        </div>
                    </div>
                </div>

            </nav>
            
             
            </>
        );
    
}

export default Navbar;