import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Spin, Menu, Dropdown, Button, Icon, message } from 'antd';
import { initDashboard } from '../../actions/dashboardActions';

class Navigation extends Component {

    constructor(){
        super();

        this.handleMenu = this.handleMenu.bind(this);
        this.userMenu = this.userMenu.bind(this);
    }

    componentWillMount(){
        this.props.initDashboard("desde componente");
    }

    componentWillUpdate(){
        console.log(this.props.dashboard);
        alert(this.props.dashboard);
    }

    handleMenu(key){
        message.info(`Click on item ${key}`);
        this.props.initDashboard(`Click on item ${key}`);
    }

    userMenu(){
        return(
            <Menu onClick={this.handleMenu}>
                <Menu.Item key="1">Perfil</Menu.Item>
                <Menu.Item key="2">Seguridad</Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">
                    <a className="nav-ant-dropdown-link" data-method="delete" href={this.props.logout_url}>Cerrar Sesión</a>
                </Menu.Item>
            </Menu>
        );
    }

    render() {
        return(
            <div>
                <Spin spinning={false}>
                    <div className="top-navigation">
                        <Row type="flex" justify="space-between">
                            <Col span={9}/>
                            <Col span={6} className="app-name">PayPlus</Col>
                            <Col span={9} className="app-navigation-dropdown text-right">
                                <Dropdown overlay={this.userMenu()}>
                                    <Button style={{ marginLeft: 8 }} icon="user">
                                        {this.props.email} <Icon type="down" />
                                    </Button>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                    {this.props.dashboard.message}
                </Spin>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboard
    };
}

export default connect(mapStateToProps, { initDashboard })(Navigation);