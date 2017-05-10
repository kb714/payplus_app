import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from "../../components/sessions/loginForm";
import logo from '../../logo.png';
import {Col, Row, Card} from "antd";
import loginStore from "../../stores/loginStore";
import { Provider } from 'react-redux';

const store = loginStore();

class LoginView extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <Row type="flex" justify="center">
                    <Col span={24}>
                        <div className="login-logo-container">
                            <img src={logo} alt="Logo PayPlus"/>
                        </div>
                    </Col>
                    <Col xs={{span:24}} sm={{span: 10}} md={{span: 8}} xl={{span: 6}}>
                        <Card className="login-container">
                            <LoginForm />
                        </Card>
                    </Col>
                </Row>
            </Provider>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <LoginView />,
        document.body.appendChild(document.createElement('div')),
    )
});