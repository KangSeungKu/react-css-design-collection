import { createThemeContract, keyframes, style } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
    location: {
        position: null,
        top: null,
        right: null,
        bottom: null,
        left: null,
    },
    fontColor: null,
    backgroundColor: null,
    waveColor: null,
});

const waveEffect = keyframes({
    '0%': {
        boxShadow: `0 0 0 0px ${themeVars.waveColor}, 0 0 0 0px ${themeVars.waveColor}`,
    },
    '40%': {
        boxShadow: `0 0 0 50px rgba(60, 41, 188, 0), 0 0 0 0px ${themeVars.waveColor}`,
    },
    '80%': {
        boxShadow: '0 0 0 50px rgba(60, 41, 188, 0), 0 0 0 30px rgba(0, 0, 0, 0)',
    },
    '100%': {
        boxShadow: '0 0 0 0px rgba(60, 41, 188, 0), 0 0 0 30px rgba(0, 230, 118, 0)',
    },
})

export const buttonStyle = style({
    position: themeVars.location.position,
    top: themeVars.location.top,
    right: themeVars.location.right,
    bottom: themeVars.location.bottom,
    left: themeVars.location.left,
    zIndex: '99',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
    height: 80,
    width: 80,
    backgroundColor: themeVars.backgroundColor,
    border: 'none',
    fontSize: 40,
    color: themeVars.fontColor,
    transition: 'all ease-in-out 0.3s',
    cursor: 'pointer',
    ':focus': {
        outline: 'none',
        border: 'none',
    },
    ':focus-visible': {
        outline: 'none',
        border: 'none',
    },
    '@media': {
        'screen and (max-width: 991px)': {
            height: 80,
            width: 80,
            top: '90%',
        },
        'screen and (max-width: 767px)': {
            height: 60,
            width: 60,
            fontSize: 20,
        },
    },
})

export const wave = style({
    animation: `${waveEffect} 4s linear infinite`,
    animationDirection: 'normal',
})