import React from 'react';
import css from 'next/css';

import { mergeStyles } from '../utils/mergeStyles';
import { Layout } from '../styles/layout';

import Logo from '../components/Logo';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

        this.formFields = [
            {
                id: 'username',
                type: 'text',
                placeholder: 'Username'
            },
            {
                id: 'password',
                type: 'password',
                placeholder: 'Password'
            },
        ];

    }

    updateFormInput = (key, value) => {
        var newState = {};
        newState[key] = value;
        this.setState(newState);
    }

    loginUser = () => {
        console.log("Tappyity Tap Tap");
    }

    _renderFormInputs = (currentState, formInputs, updateInput) => {
        return formInputs.map(({id, type, placeholder}, index) => {
            const currentValue = currentState[id] ? currentState[id] : "";
            return <FormInput key={index} id={id} type={type} placeholder={placeholder} value={currentValue} updateInput={updateInput} />
        });
    }

    render() {
        return (
            <div className={mergeStyles([Layout.flexCol, Layout.flexSecondaryCenter, Layout.xlgMarginTop, LoginCont])}>
                <Logo />
                {this._renderFormInputs(this.state, this.formFields, this.updateFormInput)}
                <Button label="Login" action={this.loginUser} />
            </div>
        );
    }
}

// CSS STYLING
const LoginCont = css({
    // backgroundColor: 'pink'
});
