import React, { Component } from 'react';
import { Row, Col, Spin } from 'antd';

class Navigation extends Component {
    render() {
        return(
            <div>
                <Spin spinning={false}>
                    <div className="top-navigation">
                        <Row type="flex" justify="space-between">
                            <Col span={6}/>
                            <Col span={12} className="app-name">PayPlus</Col>
                            <Col span={6}/>
                        </Row>
                    </div>
                </Spin>
            </div>
        );
    }
}

export default Navigation;