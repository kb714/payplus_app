import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import Navigation from '../../components/dashboard/navigation';
import dashboardStore from "../../stores/dashboardStore";
// UI
import {Col, Row} from "antd";

const store = dashboardStore();

class ShopView extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <Provider store={store}>
                <div>
                    <Navigation />
                    <Row type="flex" justify="center">
                        <Col xs={{span: 22}} md={{span: 22}} lg={{span: 20}} xl={{span: 16}}>
                            Detalle tienda
                        </Col>
                    </Row>
                </div>
            </Provider>
        );
    }
}

document.addEventListener('turbolinks:load', () => {
    ReactDOM.render(
        <ShopView />,
        document.body.appendChild(document.createElement('div')),
    )
});