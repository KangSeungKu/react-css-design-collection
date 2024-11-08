import { createThemeContract, globalStyle, style } from "@vanilla-extract/css";

const INDEX = 'calc(1vw + 1vh)';
const TRANSITION = 'cubic-bezier(.1, .7, 0, 1)';

export const themeVars = createThemeContract({
    background: {
        src: null,
    },
});

export const items = style({
    display: 'flex',
    gap: '0.4rem',
    perspective: `calc(${INDEX} * 35)`,
})

globalStyle(`${items} *`, {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
})

export const item = style({
    width: `calc(${INDEX} * 3)`,
    height: `calc(${INDEX} * 12)`,
    backgroundColor: '#222',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer',
    filter: 'grayscale(1) brightness(.5)',
    transition: `transform 1.25s ${TRANSITION}, filter 3s ${TRANSITION}, width 1.25s ${TRANSITION}`,
    willChange: 'transform, filter, rotateY, width',
    backgroundImage: themeVars.background.src,
    '::before': {
        content: '',
        position: 'absolute',
        height: '100%',
        width: 20,
        right: `calc(${INDEX} * -1)`,
    },
    '::after': {
        content: '',
        position: 'absolute',
        height: '100%',
        width: 20,
        right: `calc(${INDEX} * -1)`,
        left: `calc(${INDEX} * -1)`,
    },
    ':hover': {
        filter: 'inherit',
        transform: `translateZ(calc(${INDEX} * 10))`,
    },
    selectors: {
        [`${items} &:active`]: {
            width: '28vw',
            filter: 'inherit',
            zIndex: '100',
            transform: `translateZ(calc(${INDEX} * 10))`,
            margin: `0 .45vw`,
        },
        [`${items} &:focus`]: {
            width: '28vw',
            filter: 'inherit',
            zIndex: '100',
            transform: `translateZ(calc(${INDEX} * 10))`,
            margin: `0 .45vw`,
        }
    },
});

// Right
globalStyle(`${item}:hover + *`, {
    filter: 'inherit',
    transform: `translateZ(calc(${INDEX} * 8.5)) rotateY(35deg)`,
    zIndex: '-1',
})

globalStyle(`${item}:hover + * + *`, {
    filter: 'inherit',
    transform: `translateZ(calc(${INDEX} * 5.6)) rotateY(40deg);`,
    zIndex: '-2',
})

globalStyle(`${item}:hover + * + * + *`, {
    filter: 'inherit',
    transform: `translateZ(calc(${INDEX} * 2.5)) rotateY(30deg)`,
    zIndex: '-3',
})

globalStyle(`${item}:hover + * + * + * + *`, {
    filter: 'inherit',
    transform: `translateZ(calc(${INDEX} * .6)) rotateY(15deg)`,
    zIndex: '-4',
})

// Left
globalStyle(`${item}:has( + :hover)`, {
    filter: 'inherit',
    transform: `translateZ(calc(${INDEX} * 8.5)) rotateY(-35deg)`,
});

globalStyle(`${item}:has( + * + :hover)`, {
    filter: 'inherit',
    transform: `translateZ(calc(${INDEX} * 5.6)) rotateY(-40deg)`,
});

globalStyle(`${item}:has( + * + * + :hover)`, {
    filter: 'inherit',
    transform: `translateZ(calc(${INDEX} * 2.5)) rotateY(-30deg)`,
});

globalStyle(`${item}:has( + * + * + * + :hover)`, {
    filter: 'inherit',
    transform: `translateZ(calc(${INDEX} * .6)) rotateY(-15deg)`,
});