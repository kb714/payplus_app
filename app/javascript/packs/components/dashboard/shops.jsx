import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShops, openShopCreateForm } from '../../actions/dashboardActions';
//ui
import { Spin, Card, Col, Row, Button } from 'antd';
import NewShopForm from './newShopForm';

class Shops extends Component {

    constructor(){
        super();
        this.createShop = this.createShop.bind(this);
    }

    componentWillMount(){
        this.props.fetchShops();
    }

    createShop(){
        this.props.openShopCreateForm();
    }

    render() {
        const { dashboard } = this.props;
        return(
            <div className="dashboard-shops-container">
                <Spin tip="Cargando sus comercios"
                      spinning={dashboard.shops.loading}
                      wrapperClassName="spin-wrapper-payplus">
                    <div className="new-shop-container">
                        <Button type="danger" icon="plus" onClick={this.createShop}>Nuevo comercio</Button>
                        <NewShopForm/>
                    </div>
                    {this.shop()}
                </Spin>
            </div>
        );
    }

    shop() {
        const { dashboard } = this.props;
        if(!Array.isArray(dashboard.shops.items) || !dashboard.shops.items.length){
            return(
                <div className="text-center">
                    Sin elementos para mostrar
                </div>
            );
        } else {
            return (
                <Row>
                    {this.props.dashboard.shops.items.map((item, i) => {
                        return(
                            <Col span="8" key={i}>
                                <Card title={item.name} span="8" bodyStyle={{padding: 0}}>
                                    <div className="shop-image">
                                        <img
                                            src="https://placeholdit.imgix.net/~text?txtsize=19&txt=200×200&w=200&h=200"
                                            alt="Shop Image"/>
                                    </div>
                                    {item.name}
                                    </Card>
                            </Col>
                        );
                    })}
                </Row>
            );

        }
    }
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboard
    };
}

export default connect(mapStateToProps, { fetchShops, openShopCreateForm })(Shops);