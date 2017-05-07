import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/sessions/loginActions';
import { Form, Icon, Input, Button, message, Spin } from 'antd';
const FormItem = Form.Item;

class DeviseLoginForm extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            loading: false
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({loading: true});
                this.props.login(values).then(
                    (res) => {
                        message.success('Inicio correcto, espere un momento', 3);
                        setTimeout(() => {
                            location.reload();
                        }, 1000)
                    },
                    (err) => {
                        message.warning('Nombre de usuario o contraseña inválidos', 3);
                        this.setState({loading: false});
                    }
                );
            }
        });
    };

    render() {
        const messages = {
            email: 'Ingrese su correo electrónico',
            password: 'Ingrese su contraseña'
        };
        const { getFieldDecorator } = this.props.form;
        return (
            <Spin spinning={this.state.loading} wrapperClassName="spin-wrapper-payplus" tip="Iniciando sesión">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: messages.email }],
                        })(<Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="Email" />)}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: messages.password }],
                        })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Contraseña" />)}
                    </FormItem>
                    <FormItem>
                        <div className="text-center">
                            <Button type="danger" htmlType="submit" className="login-form-button" loading={this.state.loading}>
                                Iniciar sesión
                            </Button>
                        </div>
                        <hr/>
                        <a href="#">Olvidé mi contraseña</a>
                        <a className="pull-right" href="#">Crear nueva cuenta</a>
                    </FormItem>
                </Form>
            </Spin>
        );
    };
}

// DeviseLoginForm.propTypes = {
//     login: React.PropTypes.func.isRequired
// };

const LoginForm = Form.create()(DeviseLoginForm);

export default connect(null, { login })(LoginForm);