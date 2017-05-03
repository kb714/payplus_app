import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../components/dashboard/navigation';
import Shops from "../components/dashboard/shops";

class DashboardView extends Component {
    render() {
        return(
            <div>
                <Navigation />
                <Shops/>
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <DashboardView />,
        document.body.appendChild(document.createElement('div')),
    )
});