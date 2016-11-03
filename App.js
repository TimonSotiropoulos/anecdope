import React from 'react';
import css, {insertRule} from 'next/css';
import Head from 'next/head'

import { Colours } from './styles/base';


export default class App extends React.Component {

    constructor(props) {
        super(props)
        insertRule(`html, body { margin: 0}`);
        insertRule(`html, body {background-color:${Colours.mainBG}}`);
    }

    componentWillMount() {
    }

    render() {
        const { children }  = this.props;
        return (
            <div className={contStyle}>
                <Head>
                    <title>Anecdope</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                {children}
            </div>
        );
    }
}

/*
 * CSS Styling
 */
const contStyle = css({
    width: '100%',
    height: '100vh',
    backgroundColor: Colours.mainBG,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
});
