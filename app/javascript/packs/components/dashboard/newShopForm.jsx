import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeShopCreateForm } from '../../actions/dashboardActions';
// UI
import { Modal } from 'antd';

class NewShopForm extends Component {

    constructor(){
        super();
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleCancel(){
        this.props.closeShopCreateForm();
    }

    render(){
        const { dashboard } = this.props;
        return(
            <Modal visible={dashboard.shops.create}
                   onCancel={this.handleCancel}
                   wrapClassName="vertical-center-modal"
                   okText="Crear"
                   cancelText="Cancelar">
                Form
            </Modal>
        );
    }
}

function mapStateProps(state) {
    return {
        dashboard: state.dashboard
    }
}

export default connect(mapStateProps, { closeShopCreateForm })(NewShopForm);