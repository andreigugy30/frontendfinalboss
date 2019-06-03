import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';
import './Login.scss';

class Register extends React.Component {
    constructor() {
        super();

    }

    onSubmit = (data) => {
        const {email, password} = data;

        Accounts.createUser({
            email,
            password,
        }, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            }
            else {
                alert(err.reason);
            }
        })
    };

    render() {
        return (
            <main>
                
                <div className="login__page">
                    <AutoForm schema={RegisterSchema} onSubmit={this.onSubmit}>

                        <AutoField name="name" placeholder="Name"/>
                        <ErrorField name="name"/>
                        
                        <AutoField name="email" placeholder="Email"/>
                        <ErrorField name="email"/>

                        <AutoField name="password" type="password" placeholder="Password"/>
                        <ErrorField name="password"/>

                        <AutoField name="confirm_password" type="password" placeholder="Re-enter Password"/>
                        <ErrorField name="confirm_password"/>

                        <button className="sign-up__btn" type="submit">
                            Sign up
                        </button>
                    </AutoForm>
                </div>
                
            </main>
        )
    }
}

const RegisterSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String},
    name: {type: String},
    confirm_password: {
        type: String,
        custom() {
            if (this.value !== this.field('password').value) {
                return 'passwordMismatch';
            }
        }
    }
});

export default Register;