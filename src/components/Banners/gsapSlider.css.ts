import { createThemeContract, createVar, globalFontFace, globalStyle, style } from "@vanilla-extract/css";
import cane from "/assets/background/cane.svg";

export const themeVars = createThemeContract({
    canLabel: {
        left: null,
    },
    background: {
        left: null,
    },
    logo: {
        color: null,
    },
});

export const buttonWaveColor = createVar();

globalFontFace('Lexend', {
    src: "url(https://fonts.gstatic.com/s/lexend/v23/wlpwgwvFAVdoq2_v-6QU.woff2) format('woff2')",
})

export const gsapContainer = style({
    position: 'relative',
    overflow: 'hidden !important',
})

globalStyle(`${gsapContainer} *`, {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
})

globalStyle(`${gsapContainer} img`, {
    width: '100%',
    height: 'auto',
})

globalStyle(`${gsapContainer} a:focus`, {
    outline: 'none',
    boxShadow: 'none',
})

globalStyle(`${gsapContainer} input:focus`, {
    outline: 'none',
    border: 'none',
    boxShadow: 'none',
})

globalStyle(`${gsapContainer} input:focus-visible`, {
    outline: 'none',
    border: 'none',
    boxShadow: 'none',
})

export const backgroundText = style({
    fontFamily: 'Lexend',
    fontSize: '449px !important',
    lineHeight: 'normal !important',
    color: 'white !important',
    margin: '0 !important',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '@media': {
        'screen and (max-width: 1550px)': {
            fontSize: '350px !important',
        },
        'screen and (max-width: 1199px)': {
            fontSize: '300px !important',
        },
        'screen and (max-width: 991px)': {
            fontSize: '240px !important',
        },
        'screen and (max-width: 767px)': {
            fontSize: '180px !important',
        },
        'screen and (max-width: 575px)': {
            fontSize: '100px !important',
        },
    }
})

export const title = style({
    fontFamily: 'Lexend',
    fontSize: 40,
    lineHeight: 'normal',
    margin: 0,
    fontWeight: '900',
    '@media': {
        'screen and (max-width: 767px)': {
            fontSize: 30,
        }
    }
})

export const titleFrame = style({
    padding: '22px 28px 0',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    zIndex: '99',
    textAlign: 'center',
})

export const logo = style({
    color: themeVars.logo.color,
})

export const caneImage = style({
    maxWidth: 265,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maskImage: `url(${cane})`,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center center',
    maskPosition: 'center center',
    WebkitMaskSize: '100% auto',
    maskSize: '100% auto',
    overflow: "hidden",
    selectors: {
        '&::after': {
            '@media': {
                'screen and (max-width: 1199px)': {
                    width: '150%',
                },
                'screen and (max-width: 575px)': {
                    width: '100%',
                },
            }
        },
    },
    '@media': {
        'screen and (max-width: 1550px)': {
            maxWidth: 280,
        },
        'screen and (max-width: 991px)': {
            maxWidth: 250,
        },
        'screen and (max-width: 767px)': {
            maxWidth: 180,
        },
    }
})

export const caneImageInnerImage = style({
    width: '100%',
})

export const caneLabels = style({
    position: 'absolute',
    top: 0,
    left: themeVars.canLabel.left,
    width: '300% !important',
    mixBlendMode: 'multiply',
    transition: 'all ease-in-out 0.3s'
})

export const fruitsImages = style({
    opacity: '1',
    position: 'absolute',
    '::after': {
        content: '',
        position: 'absolute',
        background: 'linear-gradient(90deg, #000 3.66%, rgba(0, 0, 0, 0) 92.35%)',
        opacity: '0.43',
        filter: 'blur(7.5px)',
        transform: 'rotate(-6.941deg)',
        right: 0,
        width: 173,
        height: 30,
    },
})

export const imageOne = style({
    maxWidth: 282,
    bottom: 100,
    '::after': {
        bottom: -50,
    },
    '@media': {
        'screen and (max-width: 1550px)': {
            maxWidth: 250,
        },
        'screen and (max-width: 1199px)': {
            maxWidth: 220,
        },
        'screen and (max-width: 991px)': {
            maxWidth: 180,
        },
        'screen and (max-width: 767px)': {
            maxWidth: 180,
            bottom: 150,
        },
        'screen and (max-width: 575px)': {
            maxWidth: 150,
        },
    },
})

export const imageTwo = style({
    maxWidth: 247,
    top: '23%',
    left: '25%',
    '::after': {
        bottom: -200,
        height: 22,
    },
    '@media': {
        'screen and (max-width: 1550px)': {
            maxWidth: 215,
            left: '22%',
            top: '10%',
        },
        'screen and (max-width: 1199px)': {
            maxWidth: 185,
            left: '18%',
            top: '10%',
        },
        'screen and (max-width: 991px)': {
            maxWidth: 165,
            left: '12%',
            top: '12%',
        },
        'screen and (max-width: 767px)': {
            maxWidth: 145,
            left: '12%',
            top: '15%',
        },
        'screen and (max-width: 575px)': {
            maxWidth: 115,
            left: '4%',
            top: '18%',
        },
    },
})

export const imageThree = style({
    maxWidth: 211,
    top: '23%',
    right: '25%',
    '::after': {
        bottom: -280,
        width: 103,
    },
    '@media': {
        'screen and (max-width: 1550px)': {
            maxWidth: 180,
        },
        'screen and (max-width: 1199px)': {
            maxWidth: 180,
            right: '18%',
        },
        'screen and (max-width: 991px)': {
            maxWidth: 150,
            right: '12%',
        },
        'screen and (max-width: 767px)': {
            maxWidth: 130,
            right: '10%',
        },
        'screen and (max-width: 575px)': {
            maxWidth: 100,
            right: '4%',
        },
    },
})

export const imageFour = style({
    maxWidth: 294,
    bottom: 100,
    right: 0,
    '::after': {
        bottom: -50,
    },
    '@media': {
        'screen and (max-width: 1550px)': {
            maxWidth: 260,
            right: 40,
        },
        'screen and (max-width: 1199px)': {
            maxWidth: 230,
        },
        'screen and (max-width: 991px)': {
            maxWidth: 200,
        },
        'screen and (max-width: 767px)': {
            maxWidth: 180,
            bottom: 150,
        },
        'screen and (max-width: 575px)': {
            maxWidth: 150,
            right: 0,
        },
    },
})

export const sectionContainerMain = style({
    width: '100vw',
    overflow: 'hidden',
    position: 'relative',
    zIndex: '-1',
})

export const sectionContainer = style({
    width: '300vw',
    display: 'flex',
    position: 'relative',
    transition: 'all ease-in-out 0.5s',
    alignItems: 'center',
    left: themeVars.background.left,
})

export const section = style({
    minWidth: '100vw',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
    zIndex: '-1',
    background: '#C9E78A',
})

globalStyle(`${section}:nth-child(2)`, {
    backgroundColor: '#FFB2B2',
})

globalStyle(`${section}:nth-child(3)`, {
    backgroundColor: '#C1BFF2',
})