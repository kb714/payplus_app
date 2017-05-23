// Dependencies
import React from 'react';
import { connect } from 'react-redux';
// UI
import { Card, Col, Row, Menu, Upload, Button, Icon, message, Progress } from 'antd';
// Todo
import { fetchShop } from '../../../actions/shop';

class ShopComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleUpload = this.handleUpload.bind(this);
        this.props.fetchShop(window.location.pathname);
        this.state = {
            percent: 0
        }
    }

    handleUpload(info) {
        if (info.file.status === 'uploading') {
            console.log('Subiendo imagen', info.file, info.fileList);
            this.setState({
                percent: info.file.percent
            });
        }
        if (info.file.status === 'done') {
            this.setState({
                percent: 100
            });
            message.success(`Imagen actualizada con éxito`);
            this.props.fetchShop(window.location.pathname);
            setTimeout(() => {
                this.setState({
                    percent: 0
                });
            }, 3000);
        } else if (info.file.status === 'error') {
            message.error(`Error al actualizar la imagen.`);
            this.setState({
                percent: 0
            });
        }
        console.log(info);
    }

    render(){
        const changeImage = {
            showUploadList: false,
            name: 'image',
            action: `//localhost:3000/api/v1/shops${window.location.pathname}`,
            data: {_method: 'patch'},
            headers: {
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            onChange: this.handleUpload,
        };

        return(
            <div className="shop-container">
                <Card loading={this.props.shop.loading}>
                    <Row type="flex" align="middle">
                        <Col span={24}>
                            <div className="text-center">
                                <img src={this.props.shop.data.image.thumb.url} alt={this.props.shop.data.name}/>
                                <br/>
                                <Upload {...changeImage}>
                                    <Button>
                                        <Icon type="upload" /> Cambiar Imagen
                                    </Button>
                                    { this.state.percent > 0 &&
                                    <Progress percent={this.state.percent}/>
                                    }
                                </Upload>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className="shop-info">
                                <h2>{this.props.shop.data.name}</h2>
                                <span>{this.props.shop.data.description}</span>
                            </div>
                        </Col>
                        <Col span={24}>
                            <Menu mode="horizontal">
                                <Menu.Item key="transaction">
                                    Transacciones
                                </Menu.Item>
                                <Menu.Item key="buttons">
                                    Botones de pago
                                </Menu.Item>
                                <Menu.Item key="email">
                                    Cobros por email
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

function mapStateProps(state) {
    return {
        shop: state.shop
    }
}

export default connect(mapStateProps, { fetchShop })(ShopComponent);