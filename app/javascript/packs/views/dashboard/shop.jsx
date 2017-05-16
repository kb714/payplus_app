// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// UI
import {Col, Row} from "antd";
// Todo
import Application from "../layouts/application";
import ShopComponent from '../../components/dashboard/shop';

class ShopView extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <Application>
                <Row type="flex" justify="center">
                    <Col xs={{span: 22}} md={{span: 22}} lg={{span: 20}} xl={{span: 16}}>
                        <ShopComponent/>
                    </Col>
                </Row>
            </Application>
        );
    }
}

document.addEventListener('turbolinks:load', () => {
    ReactDOM.render(
        <ShopView />,
        document.body.appendChild(document.createElement('div')),
    )
});