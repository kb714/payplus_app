import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShops, openShopCreateForm, destroyShop } from '../../actions/dashboardActions';
//ui
import '../../views/layouts/style.less';
import { Spin, Col, Row, Button, Modal, Card } from 'antd';
import NewShopForm from './newShopForm';

class Shops extends React.Component {

    constructor() {
        super();
        this.handleNewShopForm = this.handleNewShopForm.bind(this);
        this.handleDestroyShop = this.handleDestroyShop.bind(this);
        this.handleShopDetail = this.handleShopDetail.bind(this);
    }

    componentWillMount(){
        this.props.fetchShops();
    }

    handleNewShopForm() {
        this.props.openShopCreateForm();
    }

    handleDestroyShop(slug) {
        const confirm = Modal.confirm;
        const { destroyShop } = this.props;
        confirm({
            okText: 'Eliminar',
            cancelText: 'Cancelar',
            title: '¿Está seguro que desea eliminar este comercio?',
            onOk() {
                destroyShop(slug);
            },
            onCancel() {},
        });
    }

    handleShopDetail(slug) {
        document.location.href = `/${slug}`;
    }


    render() {
        const { dashboard } = this.props;
        return(
            <div className="dashboard-shops-container">
                <Spin tip="Cargando sus comercios"
                      spinning={dashboard.shops.loading}
                      wrapperClassName="spin-wrapper-payplus">
                    <div className="new-shop-container">
                        <Button size="large" type="primary" icon="plus" onClick={this.handleNewShopForm}>
                            Nuevo comercio
                        </Button>

                        <NewShopForm/>
                    </div>
                    {this.shop()}
                </Spin>
            </div>
        );
    }

    shop() {
        const { dashboard } = this.props;
        const scol = {
            xs: {span: 24},
            sm: {span: 12},
            md: {span: 8}
        };

        if(!Array.isArray(dashboard.shops.items) || !dashboard.shops.items.length){
            return(
                <div className="text-center" style={{padding: '50px 0'}}>
                    <h3>No tiene ningún comercio creado</h3>
                </div>
            );
        } else {
            return (
                <Row gutter={15}>
                    {this.props.dashboard.shops.items.map((item, i) => {
                        const destroy = <Button type="danger"
                                                shape="circle"
                                                icon="delete"
                                                key={item.id}
                                                onClick={this.handleDestroyShop.bind(this, item.slug)} />;
                        return(
                            <Col xs={scol.xs} sm={scol.sm}  md={scol.md} key={i}>
                                <Card span="8" extra={destroy}>
                                    <div className="shop-image">
                                        <img
                                            src={item.image.thumb.url}
                                            alt={item.name}/>
                                    </div>
                                    <div className="shop-action">
                                        <h3>{item.name}</h3>
                                        <span>{item.description}</span>
                                        <hr/>
                                        <Button onClick={this.handleShopDetail.bind(this, item.slug)}
                                                ghost={true}
                                                type="danger">Detalles</Button>
                                    </div>
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

export default connect(mapStateToProps, { fetchShops, openShopCreateForm, destroyShop })(Shops);