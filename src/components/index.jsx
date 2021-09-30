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
        // const input=(e)=>{
            
        // }
        return (
            <form>
                <div>{this.state.first} {this.state.last}</div>
                <input type="text" onChange={(e)=>{ this.setState({ first: e.target.value }) }}  value={this.state.first} placeholder="First Name" />
                <input type="text" onChange={(e)=>{
                    this.setState({last:e.target.value})

                }} value={this.state.last} placeholder="Last Name" />
                <textarea defaultvalue={this.state.first}/>
                <br />
                <select defaultvalue="4">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button>Submit</button>
              
            </form>
        );
    }
}

export default Form;
