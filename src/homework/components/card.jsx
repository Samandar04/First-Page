import React, { Component } from 'react'
import "./main.scss"
import Img1 from "./img/choce_watch1.png"
import Img2 from "./img/choce_watch2.png"


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="container">
            <br /><br /><br /><br /><br /><br /><br />
            <div className="card-flex">
                <div className="card1">
                    <h1>Watch of Choice</h1>
                    <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.

                    </p>
                    <a href="shop.html" class="btn-card">Show Watches</a>
                </div>
                <div className="card2">
                    <img src={Img1} alt="" />
                </div>
            </div>
            <br /><br /><br />
            <div className="card-flex">
                <div className="card2">
                    <img src={Img2} alt="" />
                </div>
                <div className="card1">
                    <h1>Watch of Choice</h1>
                    <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.

                    </p>
                    <a href="shop.html" class="btn-card">Show Watches</a>
                </div>

            </div>
            <br /><br />
          

            <br /><br /><br /><br />

        </div>
        );
    }
}

export default Card;