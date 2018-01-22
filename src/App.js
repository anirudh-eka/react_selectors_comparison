import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { createSelector } from 'reselect';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button onClick={ this.handleClick }>
                    Click Here
                </button>
                Call Count: {this.state.count}
            </div>
        );
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({count: this.state.count + 1});
    }
}

export default App;
