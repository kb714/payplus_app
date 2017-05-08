import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeShopCreateForm, fetchCreateShop, resetCreateShop, fetchShops } from '../../actions/dashboardActions';
// UI
import { Modal, Form, Input } from 'antd';

class ShopForm extends Component {

    constructor(){
        super();
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClose(){
        this.props.form.resetFields();
        this.props.closeShopCreateForm();
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                this.props.fetchCreateShop(values);
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        const { created, error, message } = nextProps.dashboard.shop;
        const { form } = this.props;

        if( error ) {
            this.props.form.setFields({
                name: {
                    value: form.getFieldValue('name'),
                    errors: message.name
                },
                description: {
                    value: form.getFieldValue('description'),
                    errors: message.description
                }
            });
            this.props.resetCreateShop();
        }

        if( created ) {
            this.props.resetCreateShop();
            this.props.fetchShops();
            this.handleClose();
        }
    }

    render(){
        const { dashboard } = this.props;
        const { getFieldDecorator } = this.props.form;
        const rules = {
            name: {
                rules: [
                    //{required: true, message: 'Debe ingresar un nombre'}
                ]
            },
            description: {
                rules: [
                    //{required: true, message: 'Debe ingresar una descripción'}
                ]
            }
        };

        return(
            <Modal visible={dashboard.shop.create}
                   onCancel={this.handleClose}
                   onOk={this.handleSubmit}
                   wrapClassName="vertical-center-modal"
                   okText="Crear"
                   cancelText="Cancelar">
                <Form>
                    <Form.Item label="Nombre">
                        { getFieldDecorator('name', {...rules.name})(
                            <Input/>
                        ) }
                    </Form.Item>
                    <Form.Item label="Descripción">
                        { getFieldDecorator('description', {...rules.description})(
                            <Input type="textarea"/>
                        ) }
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}

function mapStateProps(state) {
    return {
        dashboard: state.dashboard
    }
}

const NewShopForm = Form.create()(ShopForm);

export default connect(mapStateProps, { closeShopCreateForm, fetchCreateShop, resetCreateShop, fetchShops })(NewShopForm);