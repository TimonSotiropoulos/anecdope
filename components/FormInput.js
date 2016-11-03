import React from 'react';
import css, {merge} from 'next/css';

import { Layout } from '../styles/layout';
import { Colours } from '../styles/base';
import { mergeStyles } from '../utils/mergeStyles';

export default class FormInput extends React.Component {

    constructor(props) {
        super(props);
    }

    _updateInput = (updateInput, id, event) => {
        updateInput(id, event.target.value);
    }

    render() {
        const {id, type, value, placeholder, updateInput} = this.props;
        const style = {
            // backgroundImage: 'linear-gradient(rgba(255,255,255,0.80),rgba(255,255,255,0.80)), url(static/images/inputBG.png);'
        }
        return (
            <input
            style={style}
            onChange={this._updateInput.bind(null, updateInput, id)}
            className={mergeStyles([Layout.smMargin, Layout.smPaddingLeft, Layout.smPaddingRight, FormInputStyle])}
            placeholder={placeholder}
            value={value}
            type={type} />
        );
    }
}

// Style Impors
const FormInputStyle = css({
    width: '250px',
    height: '40px',
    backgroundSize: 'cover',
    backgroundColor: Colours.greyBG,
    fontSize: '15px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '2px',
    fontFamily: 'HelveticaNeue',
    boxShadow: '5px 5px black',
    '::-webkit-input-placeholder': {
        color: Colours.textLtGrey,
        fontWeight: '400'
    },
    color: Colours.textDkGrey,
    fontWeight: '600'
});
