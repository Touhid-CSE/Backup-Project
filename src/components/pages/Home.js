import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            //errorTest: true
        }
    }
    render() {
        // if(this.state.errorTest === true){
        //     // Simulate a JS error
        //     throw new Error("I crashed!")
        // }
        return (
            <div>
                <h3>I'm from Home page. there is no error</h3>
            </div>
        )
    }
}
