import React from 'react';
import css from 'next/css';

import { mergeStyles } from '../utils/mergeStyles';
import { Layout } from '../styles/layout';

import Logo from '../components/Logo';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className={mergeStyles([Layout.flexCol, Layout.flexSecondaryCenter, LoginCont])}>
                <Logo />
            </div>
        );
    }
}

// CSS STYLING
const LoginCont = css({
    backgroundColor: 'pink'
});

const FormInput = css({
    width: '450px',
    height: '50px',
    backgroundColor: 'green'
});
