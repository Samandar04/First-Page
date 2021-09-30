import React, { Component } from 'react'
class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first:""
        }
        console.log("conc");
    }
    componentDidMount() {
        console.log("mount");
    }
    componentDidUpdate() {
        console.log("update");
        if(this.state.first.length<3){
            console.log("error");
        }
    }
    componentDidCatch() {
        console.log("catch");
    }
    render() {
        console.log("render");
        return (
            <div>
                <input type="text" onChange={(e) => { this.setState({ first: e.target.value }) }} value={this.state.first} placeholder="First Name" />
            </div>
        );
    }
}

export default Life;