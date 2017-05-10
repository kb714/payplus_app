import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../components/dashboard/navigation';
import Shops from "../components/dashboard/shops";
import { Provider } from 'react-redux';
import dashboardStore from '../stores/dashboardStore';
//ui
import {Col, Row} from "antd";
import Overview from "../components/dashboard/overview";

const store = dashboardStore();

class DashboardView extends Component {
    render() {
        return(
            <Provider store={store}>
                <div>
                    <Navigation />
                    <Row type="flex" justify="center">
                        <Col xs={{span: 22}} md={{span: 22}} lg={{span: 20}} xl={{span: 16}}>
                            <Shops />
                            <Overview />
                        </Col>
                    </Row>
                </div>
            </Provider>
        );
    }
}

document.addEventListener('turbolinks:load', () => {
    ReactDOM.render(
        <DashboardView />,
        document.body.appendChild(document.createElement('div')),
    )
});