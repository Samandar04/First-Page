import React, { Component } from 'react'
import "./main.scss"
import Img1 from "./img/new_product1.png"
import Img2 from "./img/new_product2.png"
import Img3 from "./img/new_product3.png"
import Img4 from "./img/gallery1.png"
import Img5 from "./img/gallery2.png"
import Img6 from "./img/gallery3.png"
import Img7 from "./img/gallery4.png"
class Wrap extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="wrap">
                <div className="container">
                    <h1 className="new">New Arrivals</h1>
                    <div className="wrap-flex">
                   
                        <div className="img-card">
                            <div className="img-scale">
                            <img src={Img1} alt="" />
                            </div>
                            
                            <div class="product-caption">
                                <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                <span >$ 45,743</span>
                            </div>
                        </div>
                        <div className="img-card">
                            <div className="img-scale">

                            <img src={Img2} alt="" />

                            </div>
                            
                            
                            
                            <div class="product-caption">
                                <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                <span >$ 45,743</span>
                            </div>
                        </div>
                        <div className="img-card">
                            <div className="img-scale">
                            <img src={Img3} alt="" />

                            </div>
                            
                            
                            <div class="product-caption">
                                <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                <span >$ 45,743</span>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br /><br />
                  
                </div>
                <div className="wrap2-flex">
                    <div class="single-gallery mb-30">
                            <div class="gallery-img big-img" src={Img4} style={{backgroundImage:{Img4}}}><img src={Img4} alt="" /></div>
                        </div>
                        <div className="wrap2-img">
                            <img src={Img5} alt="" />
                        </div>
                        <div className="wrap2-img1">
                            <div className="img1">
                                <img src={Img6} alt="" />
                            </div>
                            <div className="img1">
                                <img src={Img7} alt="" />
                            </div>
                        </div>
                    </div>  
            </div>
          );
    }
}
 
export default Wrap;