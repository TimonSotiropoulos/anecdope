import React from 'react';
import css, {merge} from 'next/css';

import { Layout } from '../styles/layout';
import { mergeStyles } from '../utils/mergeStyles';

export default class Logo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const image = {
            backgroundImage: 'url(static/images/anecdope.svg)'
        }
        return(
            <div className={mergeStyles([Layout.mdMargin, LogoCont])} style={image}></div>
        );
    }
}

// Style Impors
const LogoCont = css({
    width: '250px',
    height: '250px',
});
