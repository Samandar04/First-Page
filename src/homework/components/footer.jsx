import React, { Component } from 'react'
import Logo from "./img/logo.png"
import "./main.scss"
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>

                <div className="end">
                    <div className="end-card1">
                        <div className="end-img"><img src={Logo} alt="" /></div>
                        <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
                    </div>
                    <div className="end-card2">

                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#"> Offers &amp; Discounts</a></li>
                            <li><a href="#"> Get Coupon</a></li>
                            <li><a href="#">  Contact Us</a></li>
                        </ul>

                    </div>
                    <div className="end-card2">

                        <h4>New Products</h4>
                        <ul>
                            <li><a href="#">Woman Cloth</a></li>
                            <li><a href="#"> Fashion Accessories</a></li>
                            <li><a href="#"> Man Accessories</a></li>
                            <li><a href="#"> Rubber made Toys</a></li>
                        </ul>

                    </div>
                    <div className="end-card2">

                        <h4>New Products</h4>
                        <ul>
                            <li><a href="#">Woman Cloth</a></li>
                            <li><a href="#"> Fashion Accessories</a></li>
                            <li><a href="#"> Man Accessories</a></li>
                            <li><a href="#"> Rubber made Toys</a></li>
                        </ul>

                    </div>
                </div>
                <br /><br />
                <div className="footer-flex">
                    <div>Copyright ©2021 All rights reserved | This template is made with ❤️ by <span style={{ color: "red", cursor: "pointer" }}>Colorib</span></div>
                    <div className="footer-icon">
                        <i  class="o fab fa-twitter"></i>
                        <i class="o fab fa-facebook-f"></i>
                        <i class="o  fab fa-behance"></i>
                        <i class="o fas fa-globe"></i>
                    </div>
                </div>
                <br /><br />
            </div>
        );
    }
}

export default Footer;