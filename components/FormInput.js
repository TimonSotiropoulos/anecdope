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
        return (
            <input onChange={this._updateInput.bind(null, updateInput, id)}
            className={mergeStyles([Layout.smMargin, FormInputStyle])}
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
    backgroundColor: Colours.greyBase,
});
