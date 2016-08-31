import React, { Component } from 'react';
export default class SeoTest extends Component {

    constructor(props){
        super(props);
        this.state = { data: {message: ''} };
    }

    componentWillMount() {
        fetch(window.params["path"]["hello_ajax"])
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.setState({ data: json })
            })
    }

    render(){
        return(
            <div className="container">
                <h1>hello google</h1>
                <h2>hello google {this.state.data.message}</h2>
            </div>
        );
    }
}