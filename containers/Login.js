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
            <div className={styleArray([Layout.flexRow])}>

                <div className={Box}></div>
                <div className={Box2}></div>
                <div className={Box}></div>

            </div>
        );
    }
}

// CSS STYLING
const Box = css({
    width: '50px',
    height: '50px',
    backgroundColor: 'red'
});

const Box2 = css({
    width: '50px',
    height: '50px',
    backgroundColor: 'blue'
});
