import React from 'react';
import css from 'next/css';

import { styleArray } from '../utils/styleArray';
import { Layout } from '../styles/layout';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return (
            <div className={styleArray([Layout.flexCol, Layout.flexSecondaryCenter, LoginCont])}>

                <div className={Logo}></div>
                <div className={styleArray([FormInput, Layout.smMargin])}></div>
                <div className={FormInput}></div>

            </div>
        );
    }
}

// CSS STYLING
const LoginCont = css({
    backgroundColor: 'pink'
});

const Logo = css({
    width: '150px',
    height: '150px',
    backgroundColor: 'red'
});

const FormInput = css({
    width: '450px',
    height: '50px',
    backgroundColor: 'green'
});
