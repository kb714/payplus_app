import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(<div>Hola mundo</div>);
    }
}

document.addEventListener("DOMContentLoaded", e => {
    ReactDOM.render(<Dashboard />, document.body.appendChild(document.createElement('div')))
})