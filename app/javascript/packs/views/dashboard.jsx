// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// ui
import {Col, Row} from "antd";
import Application from "./layouts/application";
// Todo
import Shops from "../components/dashboard/shops";
import Overview from "../components/dashboard/overview";

class DashboardView extends React.Component {
    render() {
        return(
            <Application>
                <Row type="flex" justify="center">
                    <Col xs={{span: 22}} md={{span: 22}} lg={{span: 20}} xl={{span: 16}}>
                        <Shops />
                        <Overview />
                    </Col>
                </Row>
            </Application>
        );
    }
}

document.addEventListener('turbolinks:load', () => {
    ReactDOM.render(
        <DashboardView />,
        document.body.appendChild(document.createElement('div')),
    )
});