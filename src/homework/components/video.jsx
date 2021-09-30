import React, { Component } from 'react'
import "./main.scss"
import Img7 from "./img/gallery01.png"
import Img9 from "./img/ne.svg"
import Img10 from "./img/vidoe_more.png"
import Img8 from "./img/play-button.svg"
class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="video">

            <div className="bc-img1" style={{ backgroundImage: `url(${Img7})`, width: "100%" }} alt="" />

            <div className="play">
                <img src={Img8} alt="" />
            </div>
            <div className="next">
                <img src={Img9} alt="" />
            </div>
            <div className="next-video">
                <div className="next-bc" style={{backgroundImage:`url(${Img10})`}}   />
                <span>Next Video</span>
            </div>

        </div>
        );
    }
}
 
export default Video;