
import css from 'next/css';

const standardSizes = {
    no: '0px',
    sm: '10px',
    md: '25px',
    lg: '40px',
    xlg: '60px',
}
const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSizeObjects = (attribute, sizes) => {
    var styles = {};
    Object.keys(sizes).forEach((key) => {
        var className = key + capFirstLetter(attribute);
        var styleObject = {}
        styleObject[attribute] = sizes[key];
        styles[className] = css(styleObject);
    })
    return styles;
}

const MarginStyles = createSizeObjects('margin', standardSizes);
const MarginTopStyles = createSizeObjects('marginTop', standardSizes);
const MarginBottomStyles = createSizeObjects('marginBottom', standardSizes);
const MarginLeftStyles = createSizeObjects('marginLeft', standardSizes);
const MarginRightStyles = createSizeObjects('marginRight', standardSizes);

const PaddingStyles = createSizeObjects('padding', standardSizes);
const PaddingTopStyles = createSizeObjects('paddingTop', standardSizes);
const PaddingBottomStyles = createSizeObjects('paddingBottom', standardSizes);
const PaddingLeftStyles = createSizeObjects('paddingLeft', standardSizes);
const PaddingRightStyles = createSizeObjects('paddingRight', standardSizes);


const FlexStyles = {
    flexRow: css({
        display: 'flex',
        flexDirection: 'row'
    }),
    flexCol: css({
        display: 'flex',
        flexDirection: 'column'
    }),

    flexPrimaryCenter: css({
        justifyContent: 'center'
    }),

    flexSecondaryCenter: css({
        alignItems: 'center'
    })
}

export const Layout = Object.assign({},
    FlexStyles,
    MarginStyles,
    MarginTopStyles,
    MarginBottomStyles,
    MarginLeftStyles,
    MarginRightStyles,
    PaddingStyles,
    PaddingTopStyles,
    PaddingBottomStyles,
    PaddingLeftStyles,
    PaddingRightStyles,
)
