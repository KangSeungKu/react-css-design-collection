import { createThemeContract, globalStyle, style } from "@vanilla-extract/css";

export const flipCardThemeVars = createThemeContract({
    background: {
        src: null,
    }
});

export const cardFrame = style({
    height: 400,
    width: 300,
    padding: 20,
    perspective: 1000,
})

globalStyle(`${cardFrame} *`, {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    fontFamily: '"Nunito", sans-serif',
})

export const card = style({
    paddingTop: 100,
    transformStyle: 'preserve-3d',
    backgroundImage: flipCardThemeVars.background.src,
    width: '100%',
    transition: 'all 0.5s ease-in-out',
    borderRadius: 10,
    ':hover': {
        backgroundPosition: '80% 20%',
        transform: 'rotate3d(0.5, 1, 0, 30deg)',
    }
})

export const contentBox = style({
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.811)',
    borderRadius: '0px 0px 10px 10px',
    boxShadow: 'rgba(0, 115, 225, 0.925) 0px 20px 50px -25px',
    transition: 'all 0.5s ease-in-out',
    padding: '50px 25px 25px 25px',
    transformStyle: 'preserve-3d',
})

export const cardTitle = style({
    color: 'white',
    fontSize: 25,
    fontWeight: 900,
    transition: 'all 0.5s ease-in-out',
    transform: 'translate3d(0px, 0px, 20px)',
    ':hover': {
        transform: 'translate3d(0px, 0px, 50px)'
    }
})

export const cardContent = style({
    paddingTop: 15,
    fontSize: 12,
    color: 'rgb(185, 185, 185)',
    transition: 'all 0.5s ease-in-out',
    transform: 'translate3d(0px, 0px, 20px)',
    ':hover': {
        transform: 'translate3d(0px, 0px, 50px)'
    }
})

export const seeMore = style({
    display: 'block',
    fontWeight: 900,
    fontSize: 11,
    textTransform: 'uppercase',
    color: 'rgb(0, 136, 255)',
    paddingTop: 15,
    transition: 'all 0.5s ease-in-out',
    transform: 'translate3d(0px, 0px, 20px)',
    cursor: 'pointer',
    ':hover': {
        transform: 'translate3d(0px, 0px, 50px)',
    }
})

export const dateBox = style({
    position: 'absolute',
    top: 75,
    left: 25,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 12,
    boxShadow: 'rgb(0, 102, 225) 0px 20px 60px 0px',
    transform: 'translate3d(0px, 0px, 50px)',
})

export const dateBoxContent = style({
    display: 'block',
    textAlign: 'center',
})

export const month = style({
    color: 'white',
    fontSize: 12,
    fontWeight: 700,
})

export const date = style({
    fontSize: 19,
    fontWeight: 900,
    color: 'rgb(0, 136, 255)',
})

export const hueInvert = style({
    filter: 'hue-rotate(150deg)',
})