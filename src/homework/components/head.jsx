import React, { Component } from 'react'
import "./main.scss"
import Img1 from "./img/popular1.png"
import Img2 from "./img/popular2.png"
import Img3 from "./img/popular3.png"
import Img4 from "./img/popular4.png"
import Img5 from "./img/popular5.png"
import Img6 from "./img/popular6.png"

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="head">
                <h2>Popular Items</h2>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <br />
                <div className="container">
                    <div className="head-flex">
                        <div className="head-img">
                            <img src={Img1} alt="" />
                            <div className="te">
                                <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                <span >$ 45,743</span>
                            </div>
                            <div className="img-cap">
                                <span>Add to cart</span>
                            </div>


                        </div>

                        <div className="head-img">
                            <img src={Img2} alt="" />
                            <div className="te">
                                <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                <span >$ 45,743</span>
                            </div>
                            <div className="img-cap">
                                <span>Add to cart</span>
                            </div>
                        </div>
                        <div className="head-img">
                            <img src={Img3} alt="" />
                            <div className="te">
                                <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                <span >$ 45,743</span>
                            </div>
                            <div className="img-cap">
                                <span>Add to cart</span>
                            </div>
                        </div>
                        <div className="head-img">
                            <img src={Img4} alt="" />
                            <div className="te">
                                <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                <span >$ 45,743</span>
                            </div>
                            <div className="img-cap">
                                <span>Add to cart</span>
                            </div>
                        </div>

                        <div className="head-img">
                            <img src={Img5} alt="" />
                            <div className="te">
                                <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                <span >$ 45,743</span>
                            </div>
                            <div className="img-cap">
                                <span>Add to cart</span>
                            </div>
                        </div>
                        <div className="head-img">
                            <img src={Img6} alt="" />
                            <div className="te">
                                <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                <span >$ 45,743</span>
                            </div>
                            <div className="img-cap">
                                <span>Add to cart</span>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br />
                    <div className="view-btn">
                        <a href="#">VIEW MORE PRODUCTS</a>
                    </div>
                    <br /><br /><br /><br />

                </div>
            
                <br /><br /><br />
            </div>
        );
    }
}

export default Head;