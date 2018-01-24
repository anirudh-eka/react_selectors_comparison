import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import prefixSelector, {name} from './prefixSelectorWithNothing';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            prefix: 'Hello'
        }
        this.handleClick = this.handleClick.bind(this);
        this.swapWords = this.swapWords.bind(this);

    }

    render() {
        const output = prefixSelector(this.state);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Using {name}</h1>
                </header>
                <strong>Render Count: {this.state.count}</strong><br/>
                <strong>Recomputations: {prefixSelector.recomputations()}</strong>
                <hr/>
                <button onClick={ this.handleClick }>
                    Re-render
                </button>
                <button onClick={ this.swapWords }>
                    Swap 'Hello' and 'Goodbye' the Re-Render
                </button>
                <h2>Output:</h2>
                {output}
            </div>
        );
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({count: this.state.count + 1});
    }

    swapWords(e) {
        e.preventDefault();
        const newPrefix = this.state.prefix === 'Hello' ? 'Goodbye' : 'Hello'

        this.setState({prefix: newPrefix, count: this.state.count + 1})
    }
}

export default App;
