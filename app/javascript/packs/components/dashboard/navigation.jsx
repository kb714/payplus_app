import React, { Component } from 'react';
import { Row, Col, Spin, Menu, Dropdown, Button, Icon } from 'antd';

const userMenu = (
    <Menu>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">
            <a data-method="delete" href="/users/sign_out">Cerrar Sesión</a>
        </Menu.Item>
    </Menu>
)

class Navigation extends Component {
    render() {
        return(
            <div>
                <Spin spinning={false}>
                    <div className="top-navigation">
                        <Row type="flex" justify="space-between">
                            <Col span={6}/>
                            <Col span={12} className="app-name">PayPlus</Col>
                            <Col span={6} className="app-logout">
                                <Dropdown overlay={userMenu}>
                                    <Button style={{ marginLeft: 8 }}>
                                        Profile <Icon type="down" />
                                    </Button>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                </Spin>
            </div>
        );
    }
}

export default Navigation;