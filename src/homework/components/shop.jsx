import React, { Component } from 'react'
import Head from './head';
import Img from "./img/about_hero.png"
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="shopping">
            <div className="shop" style={{ backgroundImage: `url(${Img})`,height:"500px",backgroundRepeat:"no-repeat"}}>
                <h2 style={{textAlign:"center",paddingTop:"150px",fontSize:"70px"}}>Watch Shop</h2>
            </div>
            <br /><br /><br /><br />
                <Head/>
            </div>
        );
    }
}

export default Shop;