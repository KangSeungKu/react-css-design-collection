import { createThemeContract, style } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
    color: {
      brand: null,
    },
});

export const chip = style({
    fontSize: '1rem',
    appearance: 'none',
    position: 'relative',
    border: `1px solid #0004`,
    borderRadius: '100em',
    overflow: 'clip',
    margin: 0,
    display: 'inline-block',
    boxSizing: 'border-box',
    padding: 0,
    '::after': {
        content: 'attr(value)',
        whiteSpace: 'pre',
        lineHeight: 1,
        position: 'relative',
        padding: '0.5em 1em 0.5em 2em',
        display: 'block',
    },
    '::before': {
        content: '',
        display: 'inline-block',
        width: '0.75em',
        aspectRatio: '1',
        background: 'linear-gradient(currentcolor 0 0), linear-gradient(currentcolor 0 0)',
        backgroundPosition: '-200% -2em, 2em -200%, 50% 50%',
        backgroundSize: '1em 0.125em, 0.125em 1em',
        backgroundRepeat: 'no-repeat',
        backgroundColor: themeVars.color.brand,
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '1.125em',
        translate: '-50% -50%',
        rotate: '45deg',
        transition: 'width 0.25s, background-position 0.5s',
    },
    ':disabled': {
        color: '#6c6c6c',
        borderColor: '#0001',
    },
    selectors: {
        '&:checked::before': {
            width: '200%',
            backgroundPosition: '50% 50%, 50% 50%, 50% 50%',
            backgroundSize: '1em 0.125em, 0.125em 1em',
        },
        '&:hover:not(:disabled)': {
            borderColor: themeVars.color.brand,
            backgroundColor: `rgb(from ${themeVars.color.brand} r g b / 10%)`,
            transition: '0.4s',
        },
    }
})

export const grow = style({
    '::before': {
        backgroundPosition: '50% 50%, 50% 50%, 50% 50%',
        backgroundSize: '0 0, 0 0',
        transition: 'width 0.25s, background-size 0.5s',
    }
})

export const bounce = style({
    '::before': {
        backgroundPosition: '50% 50%, 50% 50%, 50% 50%',
        backgroundSize: '0 0, 0 0',
        transition: 'width 0.25s, background-size 0.5s',
        transitionTimingFunction: 'ease-in-out, cubic-bezier(0.75, 0, 0.5, 2)',
    }
})