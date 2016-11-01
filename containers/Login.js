import React from 'react';
import css from 'next/css';

import { mergeStyles } from '../utils/mergeStyles';
import { Layout } from '../styles/layout';

import Logo from '../components/Logo';
import FormInput from '../components/FormInput';

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

    _renderFormInputs = (currentState, formInputs, updateInput) => {
        return formInputs.map(({id, type, placeholder}, index) => {
            const currentValue = currentState[id] ? currentState[id] : "";
            return <FormInput key={index} id={id} type={type} placeholder={placeholder} value={currentValue} updateInput={updateInput} />
        });
    }

    render() {
        return (
            <div className={mergeStyles([Layout.flexCol, Layout.flexSecondaryCenter, LoginCont])}>
                <Logo />
                {this._renderFormInputs(this.state, this.formFields, this.updateFormInput)}
            </div>
        );
    }
}

// CSS STYLING
const LoginCont = css({
    backgroundColor: 'pink'
});
