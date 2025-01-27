import { style } from "@vanilla-extract/css";

export const squishyButtonStyle = style({
    position: 'relative',
    font: 'inherit',
    backgroundColor: '#f0f0f0',
    border: '0',
    color: '#242424',
    borderRadius: '0.5em',
    fontSize: '3rem',
    padding: '0.375em 1em',
    fontWeight: '600',
    textShadow: '0 0.0625em 0 #fff',
    boxShadow: `inset 0 0.0625em 0 0 #f4f4f4, 0 0.0625em 0 0 #efefef,
        0 0.125em 0 0 #ececec, 0 0.25em 0 0 #e0e0e0, 0 0.3125em 0 0 #dedede,
        0 0.375em 0 0 #dcdcdc, 0 0.425em 0 0 #cacaca, 0 0.425em 0.5em 0 #cecece`,
    transition: '0.25s ease',
    // pointer: 'cursor',
    touchAction: 'manipulation',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    cursor: 'pointer',
    ':active': {
        transform: 'translateY(0.225em)',
        boxShadow: `inset 0 0.03em 0 0 #f4f4f4, 0 0.03em 0 0 #efefef,
            0 0.0625em 0 0 #ececec, 0 0.125em 0 0 #e0e0e0, 0 0.125em 0 0 #dedede,
            0 0.2em 0 0 #dcdcdc, 0 0.225em 0 0 #cacaca, 0 0.225em 0.375em 0 #cecece`,
    },
    ':hover': {
        transform: 'translateY(0.225em)',
        boxShadow: `inset 0 0.03em 0 0 #f4f4f4, 0 0.03em 0 0 #efefef,
            0 0.0625em 0 0 #ececec, 0 0.125em 0 0 #e0e0e0, 0 0.125em 0 0 #dedede,
            0 0.2em 0 0 #dcdcdc, 0 0.225em 0 0 #cacaca, 0 0.225em 0.375em 0 #cecece`,
    },
    ':after': {
        position: 'absolute',
        content: "",
        display: 'block',
        width: '100%',
        height: 'calc(100% + 0.375em)',
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        transition: 'height 0.25s ease',
    },
    selectors: {
        ['&:hover:after']: {
            height: 'calc(100% + 0.225em)',
        }
    }
})