import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../components/dashboard/navigation';
import Shops from "../components/dashboard/shops";
import { Provider } from 'react-redux';
import dashboardStore from '../stores/dashboardStore';
//ui
import {Col, Row} from "antd";

const store = dashboardStore();

class DashboardView extends Component {
    render() {
        return(
            <Provider store={store}>
                <div>
                    <Navigation />
                    <Row type="flex" justify="center">
                        <Col xs={{span: 24}} md={{span: 16}}>
                            <Shops/>
                        </Col>
                    </Row>
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