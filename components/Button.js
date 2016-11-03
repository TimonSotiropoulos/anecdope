import React from 'react';
import css, {merge} from 'next/css';

import { Layout } from '../styles/layout';
import { Colours } from '../styles/base';
import { mergeStyles } from '../utils/mergeStyles';

export default class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {label, action} = this.props;
        return (
            <div onClick={action} className={mergeStyles([Layout.mdMarginTop, Layout.smPaddingLeft, Layout.smPaddingRight, Layout.mdPaddingTop, Layout.mdPaddingBottom, ButtonStyle])}>{label}</div>
        );
    }
}

// Style Impors
const ButtonStyle = css({
    // width: '100%',
    width: '250px',
    textAlign: 'center',
    backgroundColor: Colours.orangeBase,
    cursor: 'pointer',
    color: Colours.black,
    fontSize: '20px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '2px',
    boxShadow: '5px 5px black',
    borderColor: Colours.black,
    fontFamily: 'HelveticaNeue',
    ':hover': {
        backgroundColor: Colours.orangeDk
    }
});
