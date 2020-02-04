import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state = {
            hasError: false,
            error: '',
            errorInfo: ''
        }
    }

    static getDerivedStateFromError(error){
        
        return {hasError: true}
        // Update state so the next render will show the fallback UI.
    }

    componentDidCatch(error, errorInfo){
       
        this.setState({
            error: error,
            errorInfo: errorInfo  
        })
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }

    //style for Error Message
    style = {
        alignItems: 'center',
        color: 'gray',
        width: '50%',
        margin: 'auto',
        backgroundColor: '',
        padding: 40,
        borderRadius: 10,
        marginTop: 20,
        paddingTop: 10
    }

    render(){

        if(this.state.hasError){
            return (
                <div style={this.style}>
                    <h3>Maybe Something went wrong !</h3>
                    <details style={{ whiteSpace: 'pre-wrap'}}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )
        }

        return this.props.children
    }
}
