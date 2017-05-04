import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../components/dashboard/navigation';
import Shops from "../components/dashboard/shops";
import { Provider } from 'react-redux';
import dashboardStore from '../stores/dashboardStore';

const store = dashboardStore();

class DashboardView extends Component {
    render() {
        return(
            <Provider store={store}>
                <div>
                    <Navigation />
                    <Shops/>
                </div>
            </Provider>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <DashboardView />,
        document.body.appendChild(document.createElement('div')),
    )
});