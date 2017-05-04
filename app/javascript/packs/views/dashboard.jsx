import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../components/dashboard/navigation';
import Shops from "../components/dashboard/shops";
import { Provider } from 'react-redux';
import dashboardStore from '../stores/dashboardStore';

const current_user = document.querySelector('body');
const email = current_user.getAttribute('data-email');
const logout_url = current_user.getAttribute('data-logout');

const store = dashboardStore();

class DashboardView extends Component {
    render() {
        console.log('logged with', email);
        console.log('logout on', logout_url);
        return(
            <Provider store={store}>
                <div>
                    <Navigation email={email} logout_url={logout_url} />
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