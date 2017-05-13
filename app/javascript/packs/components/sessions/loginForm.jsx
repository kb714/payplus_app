import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLogin } from '../../actions/sessions/loginActions';
//UI
import { Form, Icon, Input, Button, message, Spin } from 'antd';

const FormItem = Form.Item;

class DeviseLoginForm extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.fetchLogin(values);
            }
        });
    };

    componentWillReceiveProps(nextProps) {
        const { error, success } = nextProps.login;
        if(error) {
            message.warning('Nombre de usuario o contraseña inválidos', 3);
        }

        if(success) {
            message.success('Inicio correcto, espere un momento', 3);
            setTimeout(() => {
                location.reload();
            }, 1000)
        }
    }

    render() {
        const messages = {
            email: 'Ingrese su correo electrónico',
            password: 'Ingrese su contraseña'
        };
        const { getFieldDecorator } = this.props.form;
        return (
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
                        <Button type="danger" htmlType="submit" className="login-form-button" loading={this.props.login.loading}>
                            Iniciar sesión
                        </Button>
                    </div>
                    <hr/>
                    <a href="#">Olvidé mi contraseña</a>
                    <a className="pull-right" href="#">Crear nueva cuenta</a>
                </FormItem>
            </Form>
        );
    };
}

DeviseLoginForm.propTypes = {
    fetchLogin: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    login: PropTypes.object.isRequired
}

const LoginForm = Form.create()(DeviseLoginForm);

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

export default connect(mapStateToProps, { fetchLogin })(LoginForm);