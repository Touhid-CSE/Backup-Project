import React, { Component } from 'react'
// import firebase from '../../firebase'
// firebase.firestore().collection('times').add({
//     title: 'Rubik\'s Cube',
//     time_seconds: 45
// })

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
