import React, { Component, useState } from 'react'

import { BrowserRouter, Switch, Route } from "react-router-dom"
import Body from './body';

import Img from "./img/about_hero.png"
import Wrap from './wrapper1';

import Card from './card';

import Shop from './shop';

import End from './end';
import Footer from './footer';
import Head from './head';
import Navbar from './navbar';
import Video from './video';
import { BlogWrap } from './styled';
import Blog from './blog';
import Detalis from './detalis';
import Login from './login';
function Main() {

    const [navbar, setNavbar] = useState(false)
    const scrollEvent = () => {
        if (window.pageYOffset > 400) {
            setNavbar(true)
        } else {
            setNavbar(false)
        };
    }

    return (
        <div onWheel={scrollEvent}>
   <BrowserRouter >

<Navbar sticed={navbar} />
<Switch >
    <Route path="/" exact>
        <Body />
        <Wrap />
        <Head />
        <Video />
        <Card />
        <End />
        <br /><br />
        <br /><br />
        <Footer />
    </Route>
    <Route path="/shop">
        <Shop  />
        <br /><br /><br /><br />
        {/* <Head className="animate__animated animate__bounceInLeft" /> */}
        <br />

        <End />
        <br /><br /><br />
        <Footer />
        <br /><br />
    </Route>
    <Route  path="/about" >
        <div style={{ backgroundImage: `url(${Img})`, height: "500px", backgroundRepeat: "no-repeat" }}><h2 style={{ textAlign: "center", paddingTop: "150px", fontSize: "70px" }}>About Us</h2></div>
        <br /><br /><br /><br />
        <div className="container">
            <div class="about-details-cap mb-50">
                <h1>Our Mission</h1>
                <br />
                <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                </p>
                <p> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
            </div>
        </div>
        <br /><br />
        <div className="container">
            <div class="about-details-cap mb-50">
                <h1>Our Mission</h1>
                <br />
                <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                </p>
                <p> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
            </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Video />
        <br /><br /><br /><br /><br />
        <End />
        <br /><br />
        <Footer />
    </Route>
    <Route path="/blog">
        <Blog />
    </Route>
        <Route path="/detalis">
            <Detalis/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
</Switch>


</BrowserRouter>
        </div>
     
    );

}

export default Main;