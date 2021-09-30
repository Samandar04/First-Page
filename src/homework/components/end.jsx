import React, { Component } from 'react'
import Img3 from "./img/box.svg"
import Img4 from "./img/padlock.svg"
import Img5 from "./img/return.svg"
import "./main.scss"
class End extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">

        
            <div className="wrapper">
            <div className="wrapper-card1">
                <img src={Img3} alt="" />
                <p className="text-p">Free Shipping Method
                </p>
                <span>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd</span>
            </div>
            <div className="wrapper-card1">
                <img src={Img4} alt="" />
                <p className="text-p">Free Shipping Method
                </p>
                <span>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd</span>
            </div>
            <div className="wrapper-card1">
                <img src={Img5} alt="" />
                <p className="text-p">Free Shipping Method
                </p>
                <span>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd</span>
            </div>
        </div>
        </div>
        
         );
    }
}
 
export default End;