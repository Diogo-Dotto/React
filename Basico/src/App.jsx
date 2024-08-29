import { Component } from "react"

export default class App extends Component {
    state = {
        name: 'Diogo Dotto',
        counter: 0
    };

    handlePClick = () => {
        this.setState({ name: 'Roger' })
    }

    handleAClick = (event) => {
        event.preventDefault();
        const { counter } = this.state;
        this.setState({ counter: counter + 1 })
    }


    render() {
        const { name, counter } = this.state;

        return (
            <div>
                <p onClick={this.handlePClick}>
                    {name} { counter }
                </p>

                <a onClick={this.handleAClick}>
                    Clique do contador
                </a>
            </div>
        )
    }
}