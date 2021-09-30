import React, { useState } from 'react'
import Img1 from "./img/watch.png"
import "animate.css"
function Body () {


  
       


        return (
            <header  className="body" style={{background:"#f2f2f2"}}>
                <div className="container">
                    <div className="flex">

                        <div class="name hero__caption">
                            <h1  class="animate__animated animate__bounceInLeft select" style={{ animationDelay: `0.4s` }}>Select Your New Perfect Style</h1>
                            <p class="animate__animated animate__bounceInLeft" data-animation="fadeInLeft" data-delay=".7s" data-duration="2000ms" style={{ animationDelay: `0.7s` }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                            <div class="animate__animated animate__bounceInLeft herobtn" style={{ animationDelay: `0.8s` }}>
                                <a href="industries.html" id="btn" class="btn hero-btn">Shop Now</a>
                            </div>
                        </div>
                        <div className='p'>
                            <div class="hero__img animate__animated animate__bounceIn data-delay.4s " style={{ animationDelay: `0.4s` }}>
                                <img src={Img1} alt="" class=" heartbeat" />
                            </div>
                        </div>

                    </div>
                </div>



            </header>
        );
    
}
{/* <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                                <div class="hero__img" data-animation="bounceIn" data-delay=".4s" style="animation-delay: 0.4s;">
                                    <img src="assets/img/hero/watch.png" alt="" class=" heartbeat">
                                </div>
                            </div> */}
export default Body;