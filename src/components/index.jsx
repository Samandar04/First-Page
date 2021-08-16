import React, { Component } from 'react'
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "",
            last: ""
        }
    }
    render() {

        return (
            <form>
                <div>{this.state.first}</div>
                <input type="text" onChange={(e) => { this.setState({ first: e.target.value }) }} placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;
