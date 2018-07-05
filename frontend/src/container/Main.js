import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
// import axios from 'axios'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {ponged: 'Not Ponged'}

        this.ping = this.ping.bind(this);
    }

    render() {
        return (
            <div className="Main">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <div>
                        <button onClick={this.ping}>Ping!</button>
                        <div>Ponged: {this.state.ponged}</div>
                    </div>
                </p>
            </div>
        );
    }

    ping() {
        // axios.get("http://localhost:8088/rest").then(res => {
        //     alert("Received Successful response from server!");
        //     this.setState({ponged: 'Ponged! '});
        // }, err => {
        //     alert("Server rejected response with: " + err);
        // });
        fetch("http://localhost:8088/rest").then(function(response) {
            return response.text();
        }).then((text) => {
            this.setState({ponged: text})
        });
    }
}

export default Main;
