import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';
import './Login.scss';

class Login extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        const {email, password} = data;

        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                FlowRouter.go('donuts');
            } else {
                alert(err.reason);
            }
        });
    };

    render() {
        return (
            <main className="cc-main">
                <div className="login__page">
                    <AutoForm schema={LoginSchema} onSubmit={this.onSubmit}>
                        <AutoField name="email" placeholder="Email"/>
                        <ErrorField name="email"/>

                        <AutoField  name="password" type="password" placeholder="Password"/>
                        <ErrorField name="password"/>

                        <AutoField className="login__page--recovery" name="password" type="password" placeholder="Forgot my password!"/>
                        <button type="submit">
                            Sign in
                        </button>
                    </AutoForm>
                </div>
                
            </main>
        )
    }
}

const LoginSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String}
});

export default Login;